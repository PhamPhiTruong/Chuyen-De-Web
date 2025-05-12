package nlu.modeltradeapi.controller;

import lombok.*;
import lombok.experimental.FieldDefaults;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.dtos.requestdto.user.AuthenticationRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.AuthenticationResponseonse;
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

    @PostMapping("/log-in")
    ApiResponse<AuthenticationResponseonse> authenticationResponseonseApiResponse(@RequestBody AuthenticationRequestDTO request){
        boolean result =authenticationService.authenticate(request);
        return  ApiResponse.<AuthenticationResponseonse>builder().result(AuthenticationResponseonse.builder().authenticated(result).build()).build();

    }
}
