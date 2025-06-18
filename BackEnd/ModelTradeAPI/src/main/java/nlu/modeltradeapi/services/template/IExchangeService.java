package nlu.modeltradeapi.services.template;

import nlu.modeltradeapi.dtos.requestdto.exchange.PayRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.vnpay.PayVNPResponseDTO;
import nlu.modeltradeapi.entities.Exchange;

import java.io.UnsupportedEncodingException;
import java.util.List;

public interface IExchangeService {
    public String createPayModel(PayRequestDTO payRequestDTO);
    public String handleReturnDTO(PayVNPResponseDTO payVNPResponseDTO);
    public String VNPPay(String exchangeId, String clientIp) throws UnsupportedEncodingException;
    public List<Exchange> getExchangesByUser();
}
