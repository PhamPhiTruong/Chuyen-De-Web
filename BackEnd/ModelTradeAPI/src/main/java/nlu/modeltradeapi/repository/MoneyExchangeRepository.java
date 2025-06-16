package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.Exchange;
import nlu.modeltradeapi.entities.MoneyExchange;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MoneyExchangeRepository extends JpaRepository<MoneyExchange, String> {
    Optional<MoneyExchange> findByExchange(Exchange exchange);
}
