package nlu.modeltradeapi.services.template;

import nlu.modeltradeapi.dtos.requestdto.model.ModelAddRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.model.ModelResponseDTO;
import nlu.modeltradeapi.dtos.requestdto.model.ModelUpdateRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.model.ModelAddResponseDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IModelService {
    public ModelAddResponseDTO addModel(ModelAddRequestDTO modelAddRequestDTO, List<MultipartFile> files);
    public List<ModelResponseDTO> getAllModelByUser();
    public ModelResponseDTO updateModel(ModelUpdateRequestDTO modelUpdateRequestDTO, List<MultipartFile> files);
    public ModelResponseDTO getModelById(String id);
    public String getPriceByModelId(String modelId);
}
