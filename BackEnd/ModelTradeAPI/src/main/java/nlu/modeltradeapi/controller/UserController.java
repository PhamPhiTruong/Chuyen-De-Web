package nlu.modeltradeapi.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import nlu.modeltradeapi.dtos.requestdto.user.OTPVerificationRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.user.UserUpdateRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.dtos.responsedto.MessageResponseDTO;
import nlu.modeltradeapi.dtos.responsedto.user.UserBasicDTO;
import nlu.modeltradeapi.entities.User;
import nlu.modeltradeapi.services.template.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;

    @GetMapping("getAll")
    public ApiResponse<List<User>> getUsers(){
        return ApiResponse.<List<User>>builder().message("Lấy danh sách thành công").result(userService.getUsers()).build();
    }

    @GetMapping("/{userId}")
    public ApiResponse<User> getUserById(@PathVariable("userId") String userId){
        return ApiResponse.<User>builder().message("Tìm thấy user").result(userService.getUserById(userId)).build();
    }

    @PutMapping("/updateUser")
    public ApiResponse<User> updateUser(@RequestBody @Valid UserUpdateRequestDTO uurd){
        return ApiResponse.<User>builder().message("Update user thành công").result(userService.updateUser(uurd)).build();
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
    @GetMapping("getUser")
    public ApiResponse<UserBasicDTO> getUser(){
        return ApiResponse.<UserBasicDTO>builder().message("Get information user successful").result( userService.getUser()).build();

    }
}
