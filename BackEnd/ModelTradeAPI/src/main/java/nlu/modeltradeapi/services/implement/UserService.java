package nlu.modeltradeapi.services.implement;

import nlu.modeltradeapi.dtos.requestdto.user.OTPVerificationRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.user.UserRegisterRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.user.UserUpdateRequestDTO;
import nlu.modeltradeapi.entities.ActiveOTPUser;
import nlu.modeltradeapi.entities.User;
import nlu.modeltradeapi.exceptions.CustomException;
import nlu.modeltradeapi.repository.ActiveOTPUserRepository;
import nlu.modeltradeapi.repository.UserRepository;
import nlu.modeltradeapi.services.template.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
public class UserService implements IUserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    private ActiveOTPUserRepository activeOTPUserRepository;
    @Autowired
    private JavaMailSenderImpl mailSender;

    private final PasswordEncoder passwordEncoder= new BCryptPasswordEncoder(10);

    @Override
    public User registerUser(UserRegisterRequestDTO registerRequest) {
        System.out.println(registerRequest.getUserName());

        // Kiểm tra username đã tồn tại
        if (userRepository.existsByUserName(registerRequest.getUserName())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Email already exists");
        }


        User user = User.builder()
                .userName(registerRequest.getUserName())
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(registerRequest.getPassword())
                .phoneNumber(registerRequest.getPhoneNumber())
                .dateOfBirth(registerRequest.getDateOfBirth())
                .createdDate(LocalDateTime.now())
                .build();
        System.out.println(user.getUserName()+user.getEmail()+user.getPassword()+user.getPhoneNumber()+user.getDateOfBirth());

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);

        // Tạo OTP
        String otp = generateOTP();
        LocalDateTime expirationTime = LocalDateTime.now().plusMinutes(5);
        ActiveOTPUser otpUser = ActiveOTPUser.builder()
                .otp(otp)
                .user(savedUser)
                .expirationTime(expirationTime)
                .build();
        activeOTPUserRepository.save(otpUser);

        // Gửi email OTP
        sendOTPEmail(savedUser.getEmail(), otp);

        return savedUser;
    }

    private void sendOTPEmail(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP for Account Verification");
        message.setText("Your OTP is: " + otp + "\nThis OTP is valid for 5 minutes.");
        mailSender.send(message);
    }

    private String generateOTP() {
        Random random = new Random();
        return String.format("%06d", random.nextInt(999999));
    }


    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    }


    @Override
    public User updateUser(UserUpdateRequestDTO updateRequest) {
        UserDetails userTrue = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var userValue = userRepository.findByUserName(userTrue.getUsername()).orElseThrow(() -> new RuntimeException("User không tồn tại"));
        User user = User.builder()
                .userId(userValue.getUserId())
                .userName(userValue.getUserName())
                .email(updateRequest.getEmail())
                .password(passwordEncoder.encode(updateRequest.getPassword()))
                .name(updateRequest.getName())
                .phoneNumber(updateRequest.getPhoneNumber())
                .dateOfBirth(updateRequest.getDateOfBirth())
                .createdDate(userValue.getCreatedDate())
                .active(userValue.isActive())
                .isDelete(updateRequest.isDeleted())
                .build();
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(String userId) throws CustomException{
        if(!userRepository.existsById(userId)) {
            throw new CustomException("User not found");
        }
        userRepository.deleteById(userId);
    }

    @Override
    public void verifyOTP(OTPVerificationRequestDTO request) {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() ->new RuntimeException("User not found"));
        ActiveOTPUser otpUser = activeOTPUserRepository.findByUserAndOtp(user, request.getOtp())
                .orElseThrow(() -> new RuntimeException("Invalid OTP or user"));

        if (otpUser.getExpirationTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP has expired");
        }

        User user2 = userRepository.findById(user.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        user2.setActive(true);
        userRepository.save(user2);

        // Xóa OTP sau khi xác nhận
        activeOTPUserRepository.delete(otpUser);
    }
}
