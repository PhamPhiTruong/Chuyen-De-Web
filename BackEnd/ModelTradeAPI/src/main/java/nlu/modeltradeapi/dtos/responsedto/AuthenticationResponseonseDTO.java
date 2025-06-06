package nlu.modeltradeapi.dtos.responsedto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults (level = AccessLevel.PRIVATE)
public class AuthenticationResponseonseDTO {
    String token;
    boolean authenticated;
}
