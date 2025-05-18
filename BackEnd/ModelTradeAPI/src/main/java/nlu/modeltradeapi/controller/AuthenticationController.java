package nlu.modeltradeapi.controller;

import com.nimbusds.jose.JOSEException;
import lombok.*;
import lombok.experimental.FieldDefaults;
import nlu.modeltradeapi.dtos.requestdto.user.IntrospectRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.dtos.requestdto.user.AuthenticationRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.AuthenticationResponseonseDTO;
import nlu.modeltradeapi.dtos.responsedto.IntrospecResponseonseDTO;
import nlu.modeltradeapi.services.implement.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@FieldDefaults (level = AccessLevel.PRIVATE, makeFinal = true)

public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/token")
    public ApiResponse<AuthenticationResponseonseDTO> authenticate(@RequestBody AuthenticationRequestDTO authenticationRequestDTO) {
        return ApiResponse.<AuthenticationResponseonseDTO>builder().message("Lấy token thành công").result(authenticationService.authenticate(authenticationRequestDTO)).build();
    }
    @PostMapping("/introspect")
    public ApiResponse<IntrospecResponseonseDTO> authenticate(@RequestBody IntrospectRequestDTO request) throws ParseException, JOSEException {
        return ApiResponse.<IntrospecResponseonseDTO>builder().message("Quá trình xác thực token thành công").result(authenticationService.introspect(request)).build();
    }

}
