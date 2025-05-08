package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.ActiveOTPUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ActiveOTPUserRepository extends JpaRepository<ActiveOTPUser, Long> {
    Optional<ActiveOTPUser> findByUserIdAndOtp(String userId, String otp);

}