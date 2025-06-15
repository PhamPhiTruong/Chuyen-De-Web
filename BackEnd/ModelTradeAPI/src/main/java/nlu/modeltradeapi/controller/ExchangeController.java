package nlu.modeltradeapi.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import nlu.modeltradeapi.dtos.requestdto.exchange.PayRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.dtos.responsedto.vnpay.PayVNPResponseDTO;
import nlu.modeltradeapi.services.template.IExchangeService;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("api/exchange")
@RequiredArgsConstructor
public class ExchangeController {
    private final IExchangeService exchangeService;

    @PostMapping("createPayModel")
    public ApiResponse<String> createPayModel(@RequestBody PayRequestDTO payRequestDTO) throws UnsupportedEncodingException {
        String result = exchangeService.createPayModel(payRequestDTO);
        if (result == null || result.isEmpty()) {
            result = "Failed";
        }
        return ApiResponse.<String>builder()
                .result(result)
                .build();
    }

    @GetMapping("/createPayURL/{exchangeId}")
    public ApiResponse<String> createPayURL(@RequestParam String exchangeId, HttpServletRequest request) throws UnsupportedEncodingException {
        String clientIp = request.getRemoteAddr();
        String url = exchangeService.VNPPay(exchangeId, clientIp);
        return ApiResponse.<String>builder()
                .result(url)
                .build();
    }

    @PostMapping("vnp-return")
    public ApiResponse<String> handleVNP(@RequestBody PayVNPResponseDTO payVNPResponseDTO) {
        String mess = exchangeService.handleReturnDTO(payVNPResponseDTO);
        return ApiResponse.<String>builder()
                .result(mess)
                .build();
    }


}
