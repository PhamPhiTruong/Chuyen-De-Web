package nlu.modeltradeapi.services.implement;

import nlu.modeltradeapi.dtos.responsedto.CloudinaryResponse;
import nlu.modeltradeapi.entities.Image;
import nlu.modeltradeapi.entities.Model;
import nlu.modeltradeapi.entities.ModelImage;
import nlu.modeltradeapi.repository.ImageRepository;
import nlu.modeltradeapi.repository.ModelImageRepository;
import nlu.modeltradeapi.repository.ModelRepository;
import nlu.modeltradeapi.util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.MessageSource;

import java.time.LocalDateTime;

@Service
public class ImageService {

    @Autowired
    private CloudinaryService cloudinaryService;
    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ModelRepository modelRepository;
    @Autowired
    private ModelImageRepository modelImageRepository;

    @Transactional
    public void uploadImage(final String  modelId, final MultipartFile file) {
        Model model = this.modelRepository.findById(modelId)
                .orElseThrow(() -> new RuntimeException("Model not found with id: " + modelId));

        FileUploadUtil.assertAllowed(file, FileUploadUtil.IMAGE_PATTERN);
        final String fileName = FileUploadUtil.getFileName(file.getOriginalFilename());
        final CloudinaryResponse response = this.cloudinaryService.uploadFile(file, fileName);
        // Tạo và lưu Image
        final Image image = Image.builder()
                .url(response.getUrl())
                .CloudinaryImageId(response.getPublicId())
                .uploadDate(LocalDateTime.now())
                .build();
        Image savedImage = this.imageRepository.save(image);

        // Tạo và lưu ModelImage để liên kết
        final ModelImage modelImage = ModelImage.builder()
                .model(model)
                .image(savedImage)
                .main(false) // Mặc định không phải ảnh chính
                .orderIndex(0) // Mặc định thứ tự là 0
                .build();
        this.modelImageRepository.save(modelImage);
    }
}
