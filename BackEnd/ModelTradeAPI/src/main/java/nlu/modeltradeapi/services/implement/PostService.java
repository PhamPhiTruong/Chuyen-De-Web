package nlu.modeltradeapi.services.implement;

import lombok.RequiredArgsConstructor;
import nlu.modeltradeapi.dtos.requestdto.post.PostCreateRequestDTO;
import nlu.modeltradeapi.entities.Model;
import nlu.modeltradeapi.entities.ModelPromotionPost;
import nlu.modeltradeapi.repository.ModelPromotionPostRepository;
import nlu.modeltradeapi.repository.ModelRepository;
import nlu.modeltradeapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    private final ModelPromotionPostRepository postRepository;
    @Autowired
    private final ModelRepository modelRepository;


    public ModelPromotionPost createPost(PostCreateRequestDTO request) {

        //tìm model theo modelid
        Model model = modelRepository.findById(request.getModelID()).
                orElseThrow(() -> new RuntimeException("Model not found"));

        //Tao modelPromotionPost
        ModelPromotionPost post = ModelPromotionPost.builder()
                .model(model)
                .promotionDescription(request.getDescription())
                .totalShare(0)
                .isDelete(false)
                .build();

        return postRepository.save(post);


    }

}
