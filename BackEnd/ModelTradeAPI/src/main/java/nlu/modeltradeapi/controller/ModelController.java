package nlu.modeltradeapi.controller;

import lombok.RequiredArgsConstructor;
import nlu.modeltradeapi.dtos.responsedto.model.GetModelResponseDTO;
import nlu.modeltradeapi.exceptions.CustomException;
import nlu.modeltradeapi.services.template.IModelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/model")
@RequiredArgsConstructor
public class ModelController {
    private final IModelService modelService;

    @GetMapping(path = "getModel")
    public ResponseEntity<GetModelResponseDTO> getModel(
            @RequestParam String modelId
    ) throws CustomException {
        return ResponseEntity.status(HttpStatus.OK).body(modelService.getModel(modelId));
    }
}
