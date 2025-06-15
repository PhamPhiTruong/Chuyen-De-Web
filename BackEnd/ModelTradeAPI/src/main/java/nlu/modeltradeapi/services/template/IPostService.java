package nlu.modeltradeapi.services.template;

import nlu.modeltradeapi.dtos.requestdto.post.PostCreateRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.ApiResponse;
import nlu.modeltradeapi.dtos.responsedto.post.PostResponseDTO;

import java.util.List;

public interface IPostService {
    public PostCreateRequestDTO createPost(PostCreateRequestDTO post);
    List<PostResponseDTO> searchPosts(String keyword);
}
