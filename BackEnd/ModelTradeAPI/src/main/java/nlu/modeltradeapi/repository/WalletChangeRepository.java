package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.Wallet;
import nlu.modeltradeapi.entities.WalletChange;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletChangeRepository extends JpaRepository<WalletChange, Long> {
    WalletChange findByWallet(Wallet wallet);
}
