package nlu.modeltradeapi.services.implement;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import nlu.modeltradeapi.entities.User;
import nlu.modeltradeapi.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import nlu.modeltradeapi.dtos.requestdto.user.AuthenticationRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.AuthenticationResponseonse;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    UserRepository userRepository;
    public boolean authenticate(AuthenticationRequestDTO authenticationRequestDTO) {
        System.out.println(authenticationRequestDTO.getUserName());

        var user = userRepository.findByUserName(authenticationRequestDTO.getUserName()).orElseThrow(() -> new RuntimeException("User không tồn tại")) ;
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        return passwordEncoder.matches(authenticationRequestDTO.getPassword(),user.getPassword());

    }

}
