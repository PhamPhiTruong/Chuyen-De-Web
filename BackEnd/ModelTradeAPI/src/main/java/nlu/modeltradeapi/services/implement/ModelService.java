package nlu.modeltradeapi.services.implement;

import nlu.modeltradeapi.dtos.requestdto.model.AddModelRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.model.SetModelRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.MessageResponseDTO;
import nlu.modeltradeapi.dtos.responsedto.model.GetModelResponseDTO;
import nlu.modeltradeapi.entities.Model;
import nlu.modeltradeapi.exceptions.CustomException;
import nlu.modeltradeapi.mock.FakeDAO;
import nlu.modeltradeapi.services.template.IModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelService implements IModelService {
    private final FakeDAO fakeData;

    @Autowired
    public ModelService(FakeDAO fakeData) {
        this.fakeData = fakeData;
    }

    @Override
    public MessageResponseDTO addModel(AddModelRequestDTO addModelRequestDTO) throws CustomException {
        // Code add vào database
        return new MessageResponseDTO("OK Bro");
    }

    @Override
    public GetModelResponseDTO getModel(String modelId) throws CustomException {
        Model m = fakeData.getModel(modelId);
        return GetModelResponseDTO
                .builder()
                .id(m.getId())
                .name(m.getName())
                .price(m.getPrice())
                .description(m.getDescription())
                .images(m.getImages())
                .total(m.getTotal())
                .build();
    }

    @Override
    public MessageResponseDTO setModel(SetModelRequestDTO updateModelRequestDTO) throws CustomException {
        return new MessageResponseDTO("OK Pal");
    }

    @Override
    public MessageResponseDTO deleteModel(String modelId) throws CustomException {
        return new MessageResponseDTO("OK Guy");
    }
}
