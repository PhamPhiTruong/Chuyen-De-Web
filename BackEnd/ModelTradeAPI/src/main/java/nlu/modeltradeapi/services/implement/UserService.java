package nlu.modeltradeapi.services.implement;

import nlu.modeltradeapi.dtos.requestdto.user.UserRegisterRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.user.UserUpdateRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.MessageResponseDTO;
import nlu.modeltradeapi.entities.User;
import nlu.modeltradeapi.repository.UserRepository;
import nlu.modeltradeapi.services.template.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public User registerUser(UserRegisterRequestDTO registerRequest) {
        User user = User.builder()
                .userName(registerRequest.getUserName())
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(registerRequest.getPassword())
                .phoneNumber(registerRequest.getPhoneNumber())
                .dateOfBirth(registerRequest.getDateOfBirth())
                .createdDate(LocalDateTime.now())
                .build();
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(() ->new RuntimeException("User not found"));
    }

    @Override
    public User updateUser(String userId, UserUpdateRequestDTO updateRequest) {
        User user = getUserById(userId);
        user.setName(updateRequest.getName());
        user.setEmail(updateRequest.getEmail());
        user.setPassword(updateRequest.getPassword());
        user.setPhoneNumber(updateRequest.getPhoneNumber());
        user.setDateOfBirth(updateRequest.getDateOfBirth());
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }
}
