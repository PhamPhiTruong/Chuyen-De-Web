package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.Pay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayRepository extends JpaRepository<Pay,Long> {
}
