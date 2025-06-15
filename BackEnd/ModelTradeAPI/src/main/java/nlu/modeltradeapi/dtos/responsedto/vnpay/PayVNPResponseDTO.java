package nlu.modeltradeapi.dtos.responsedto.vnpay;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PayVNPResponseDTO {
    String payTmnCode;
    double payAmount;
    String payBankCode;
    String payBankTranNo;
    String payCardType;
    String payDate;
    String payOrderInfo;
    Double payTransactionNo;
    Integer payResponseCode;
    Integer payTransactionStatus;
    String payTxnRef;
    String paySecureHash;
}
