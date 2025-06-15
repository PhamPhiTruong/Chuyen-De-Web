package nlu.modeltradeapi.repository;

import nlu.modeltradeapi.entities.ModelPromotionPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ModelPromotionPostRepository extends JpaRepository<ModelPromotionPost, String> {
    List<ModelPromotionPost> findByModel_NameContainingIgnoreCase(String keyword);
}
