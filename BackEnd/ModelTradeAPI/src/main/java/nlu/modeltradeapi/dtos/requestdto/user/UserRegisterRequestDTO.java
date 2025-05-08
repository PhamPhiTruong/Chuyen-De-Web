package nlu.modeltradeapi.dtos.requestdto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequestDTO {
    private String username;
    private String email;
    private String password;
    private String name;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private Boolean isDeleted;

}
