package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.Model;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModelRepository extends JpaRepository<Model, String> {
    Optional<Model>findById(String id);
}
