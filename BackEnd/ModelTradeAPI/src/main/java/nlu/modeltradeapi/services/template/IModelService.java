package nlu.modeltradeapi.services.template;

import nlu.modeltradeapi.dtos.requestdto.model.AddModelRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.model.SetModelRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.MessageResponseDTO;
import nlu.modeltradeapi.dtos.responsedto.model.GetModelResponseDTO;
import nlu.modeltradeapi.exceptions.CustomException;

public interface IModelService {
    MessageResponseDTO addModel(AddModelRequestDTO addModelRequestDTO) throws CustomException;
    GetModelResponseDTO getModel(String modelId) throws CustomException;
    MessageResponseDTO setModel(SetModelRequestDTO updateModelRequestDTO) throws CustomException;
    MessageResponseDTO deleteModel(String modelId) throws CustomException;
}
