package nlu.modeltradeapi.dtos.responsedto;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.RequestMapping;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults (level = AccessLevel.PRIVATE)
public class AuthenticationResponseonse {
    String token;
    boolean authenticated;
}
