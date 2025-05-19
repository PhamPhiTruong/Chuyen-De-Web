package nlu.modeltradeapi.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nlu.modeltradeapi.dtos.requestdto.user.OTPVerificationRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.user.UserRegisterRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.user.UserUpdateRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.dtos.responsedto.MessageResponseDTO;
import nlu.modeltradeapi.entities.User;
import nlu.modeltradeapi.services.template.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final IUserService userService;

    @PostMapping("register")
    public ResponseEntity<MessageResponseDTO> register(@RequestBody @Valid UserRegisterRequestDTO urrd) {
        MessageResponseDTO message = MessageResponseDTO.builder().message("Không thành công").build();

        message.setMessage(urrd.getEmail() + message.getMessage());
        if(userService.registerUser(urrd)!= null) message.setMessage("Đăng kí thành công. Vui lòng kiểm tra email");

        return new ResponseEntity<>(
                message,
                HttpStatus.OK
        );
    }

    @PostMapping("verifyOtp")
    public ResponseEntity<MessageResponseDTO> verifyOtp(@RequestBody OTPVerificationRequestDTO requestDTO){
        userService.verifyOTP(requestDTO);
        MessageResponseDTO message = MessageResponseDTO.builder().message(" Thành công").build();

        message.setMessage(requestDTO.getEmail() + message.getMessage() + " xác nhận");
        return new ResponseEntity<>(
                message,
                HttpStatus.OK
                );
    }


    @GetMapping("getAll")
    public ApiResponse<List<User>> getUsers(){
        return ApiResponse.<List<User>>builder().message("Lấy danh sách thành công").result(userService.getUsers()).build();
    }

    @GetMapping("/{userId}")
    public ApiResponse<User> getUserById(@PathVariable("userId") String userId){
        return ApiResponse.<User>builder().message("Tìm thấy user").result(userService.getUserById(userId)).build();
    }

    @PutMapping("/updateUser/{userId}")
    public ApiResponse<User> updateUser(@PathVariable String userId, @RequestBody @Valid UserUpdateRequestDTO uurd){
        return ApiResponse.<User>builder().message("Update user thành công").result(userService.updateUser(userId, uurd)).build();
    }

    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<MessageResponseDTO> deleteUser(@PathVariable String userId){
        MessageResponseDTO message = MessageResponseDTO.builder().message("Thành công").build();
        try {
            userService.deleteUser(userId);
            return new ResponseEntity<>(
                    message,
                    HttpStatus.OK
            );
        }catch (Exception e){
            message.setMessage("Không thành công");
            return new ResponseEntity<>(
                    message,
                    HttpStatus.OK
            );
        }
    }
}
