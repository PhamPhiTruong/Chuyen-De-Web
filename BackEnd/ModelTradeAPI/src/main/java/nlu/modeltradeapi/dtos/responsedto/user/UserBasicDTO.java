package nlu.modeltradeapi.dtos.responsedto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import nlu.modeltradeapi.constant.UserRole;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserBasicDTO {
    private String userId;
    private String userName;
    private String email;
    private String name;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private LocalDateTime createdDate;
    private UserRole role;
    private boolean active;
    private boolean isDelete;

}
