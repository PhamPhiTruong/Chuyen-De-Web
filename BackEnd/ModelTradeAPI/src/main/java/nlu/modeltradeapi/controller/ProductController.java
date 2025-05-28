package nlu.modeltradeapi.controller;

import nlu.modeltradeapi.services.implement.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/models")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    ImageService imageService;

    @PostMapping("/image/{modelId}")
    public ResponseEntity<?> uploadImage(@PathVariable final String modelId, @RequestPart final MultipartFile file) {
        this.imageService.uploadImage(modelId, file);
        return ResponseEntity.ok("Upload successfully");
    }
}
