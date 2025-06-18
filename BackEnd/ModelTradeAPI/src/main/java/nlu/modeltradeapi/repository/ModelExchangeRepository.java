package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.Exchange;
import nlu.modeltradeapi.entities.ModelExchange;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModelExchangeRepository extends JpaRepository<ModelExchange, String> {
    Optional<ModelExchange> findByExchange(Exchange exchange);
}
