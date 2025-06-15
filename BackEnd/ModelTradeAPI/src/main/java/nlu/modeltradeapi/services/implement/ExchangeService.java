package nlu.modeltradeapi.services.implement;

import nlu.modeltradeapi.constant.ExchangeStatus;
import nlu.modeltradeapi.dtos.requestdto.exchange.PayRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.vnpay.PayVNPResponseDTO;
import nlu.modeltradeapi.entities.*;
import nlu.modeltradeapi.repository.*;
import nlu.modeltradeapi.services.template.IExchangeService;
import nlu.modeltradeapi.services.template.IVNPService;
import nlu.modeltradeapi.util.entity_mapper.PayMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
public class ExchangeService implements IExchangeService {

    @Autowired
    PayRepository payRepository;

    @Autowired
    IVNPService vnpService;

    @Autowired
    ExchangeRepository exchangeRepository;

    @Autowired
    ModelExchangeRepository exchangeModelRepository;

    @Autowired
    MoneyExchangeRepository exchangeMoneyRepository;

    @Autowired
    ModelRepository modelRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PayMapper payMapper;

    @Override
    public String createPayModel(PayRequestDTO payRequestDTO) {
        UserDetails userTrue = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var userValue = userRepository.findByUserName(userTrue.getUsername()).orElseThrow(() -> new RuntimeException("User không tồn tại"));

        Model model = modelRepository.findById(payRequestDTO.getModelId()).orElseThrow(()-> new RuntimeException("Model không tồn tại"));

        Exchange exchange = Exchange.builder()
                .type("pay_model")
                .build();
        Exchange exchangeSaved = exchangeRepository.save(exchange);
        MoneyExchange moneyExchange = MoneyExchange.builder()
                .exchange(exchangeSaved)
                .buyer(userValue)
                .money(Double.parseDouble(payRequestDTO.getPayAmount()))
                .build();
        MoneyExchange moneyExchangeSaved = exchangeMoneyRepository.save(moneyExchange);
        ModelExchange modelExchange = ModelExchange.builder()
                .exchange(exchangeSaved)
                .model(model)
                .quantity(payRequestDTO.getQuantity())
                .moneyCompensation(0)
                .build();
        ModelExchange modelExchangeSaved = exchangeModelRepository.save(modelExchange);
        model.setQuantity(model.getQuantity()-payRequestDTO.getQuantity());
        modelRepository.save(model);
        return "Ok";
    }

    @Override
    public String handleReturnDTO(PayVNPResponseDTO payVNPResponseDTO) {
        Exchange exchange = exchangeRepository.findById(payVNPResponseDTO.getPayTxnRef()).orElseThrow(() -> new RuntimeException("Exchange Illegal"));
        if (payVNPResponseDTO.getPayResponseCode()==0){
            Pay pay = payMapper.toEntity(payVNPResponseDTO);
            pay.setExchange(exchange);
            payRepository.save(pay);
            MoneyExchange moneyExchange = exchangeMoneyRepository.findByExchange(exchange).orElseThrow(() -> new RuntimeException("Exchange Not Exist"));
            moneyExchange.setStatus(ExchangeStatus.SUCCESS_TRADE);
            MoneyExchange moneyExchangeSaved = exchangeMoneyRepository.save(moneyExchange);
            ModelExchange modelExchange = exchangeModelRepository.findByExchange(exchange).orElseThrow(() -> new RuntimeException("Exchange Not Exist"));
            modelExchange.setStatus(ExchangeStatus.SUCCESS_TRADE);
            ModelExchange modelExchangeSaved = exchangeModelRepository.save(modelExchange);
            exchange.setStatus(ExchangeStatus.SUCCESS_TRADE);
            ModelExchange modelExchangeSavedSaved = exchangeModelRepository.save(modelExchangeSaved);
            if(
                    moneyExchangeSaved.getStatus().equals(ExchangeStatus.SUCCESS_TRADE)
                    && modelExchangeSaved.getStatus().equals(ExchangeStatus.SUCCESS_TRADE)
                    && modelExchangeSavedSaved.getStatus().equals(ExchangeStatus.SUCCESS_TRADE)
            ){
                return "Success";
            }
        }
        return "Fail";
    }

    @Override
    public String VNPPay(String exchangeId, String clientIp) throws UnsupportedEncodingException {
        Exchange exchange = exchangeRepository.findById(exchangeId).orElseThrow(() -> new RuntimeException("Exchange Not Exist"));
        MoneyExchange moneyExchange = exchangeMoneyRepository.findByExchange(exchange).orElseThrow(() -> new RuntimeException("Exchange Not Exist"));
        return vnpService.createPaymentUrl(Double.toString(moneyExchange.getMoney()),clientIp,exchangeId);
    }

    @Override
    public List<Exchange> getExchangesByUser() {
        UserDetails userTrue = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var userValue = userRepository.findByUserName(userTrue.getUsername()).orElseThrow(() -> new RuntimeException("User không tồn tại"));
        return exchangeRepository.findAllRelatedToUser(userValue.getUserId());
    }
}
