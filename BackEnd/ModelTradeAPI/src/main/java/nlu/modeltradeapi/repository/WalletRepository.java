package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.User;
import nlu.modeltradeapi.entities.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WalletRepository extends JpaRepository<Wallet, String> {
    Optional<Wallet> findByUser(User user);
}
