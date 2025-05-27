package nlu.modeltradeapi.controller;

import lombok.*;
import lombok.experimental.FieldDefaults;
import nlu.modeltradeapi.dtos.requestdto.user.UserLoginRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.services.implement.AuthenticationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@FieldDefaults (level = AccessLevel.PRIVATE, makeFinal = true)

public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public ApiResponse<String> login(@RequestBody UserLoginRequestDTO userLoginRequestDTO) {
        String token = authenticationService.authenticate(userLoginRequestDTO);
        return ApiResponse.<String>builder()
                .message("Login success. Token authenticated")
                .result(token)
                .build();
    }

}
