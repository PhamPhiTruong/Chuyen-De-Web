package nlu.modeltradeapi.dtos.requestdto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequestDTO {
    private String email;
    private String password;
    private String name;
    private String phoneNumber;
    private LocalDateTime dateOfBirth;
}
