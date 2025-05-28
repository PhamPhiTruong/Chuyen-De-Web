package nlu.modeltradeapi.services.implement;

import nlu.modeltradeapi.dtos.requestdto.model.ModelAddRequestDTO;
import nlu.modeltradeapi.dtos.requestdto.model.ModelUpdateRequestDTO;
import nlu.modeltradeapi.dtos.responsedto.model.ModelAddResponseDTO;
import nlu.modeltradeapi.entities.Model;
import nlu.modeltradeapi.repository.ImageRepository;
import nlu.modeltradeapi.repository.ModelImageRepository;
import nlu.modeltradeapi.repository.ModelRepository;
import nlu.modeltradeapi.services.template.IModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ModelService implements IModelService {
    @Autowired
    private ModelRepository modelRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ModelImageRepository modelImageRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    @Override
    public ModelAddResponseDTO addModel(ModelAddRequestDTO modelAddRequestDTO, List<MultipartFile> files) {

        return null;
    }

    @Override
    public Model updateModel(ModelUpdateRequestDTO modelUpdateRequestDTO, List<MultipartFile> files) {
        return null;
    }
}
