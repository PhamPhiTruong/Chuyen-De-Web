package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.Model;
import nlu.modeltradeapi.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ModelRepository extends JpaRepository<Model, String> {
    Optional<Model>findById(String id);
    List<Model> findByUser(User user);
    @Query("SELECT m.price FROM model m WHERE m.modelId = :id")
    Double getPriceByModelId(@Param("id") String id);
}
