package nlu.modeltradeapi.dtos.requestdto.exchange;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PayRequestDTO {
    String modelId;
    int quantity;
    String payAmount;
}
