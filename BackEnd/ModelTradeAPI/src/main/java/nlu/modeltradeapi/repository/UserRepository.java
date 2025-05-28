package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User>  findByUserName(String userName);
    Optional<User> findByEmail(String email);
    boolean existsByUserId(String userId);
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);
}
