package nlu.modeltradeapi.services.template;

import nlu.modeltradeapi.dtos.requestdto.user.UserRegisterRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.MessageResponseDTO;
import nlu.modeltradeapi.entities.User;

public interface IUserService {
    public User registerUser(UserRegisterRequestDTO registerRequest);
}
