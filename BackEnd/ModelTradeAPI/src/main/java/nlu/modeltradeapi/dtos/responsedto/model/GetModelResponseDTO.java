package nlu.modeltradeapi.dtos.responsedto.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import nlu.modeltradeapi.entities.Image;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetModelResponseDTO {
    private String id;
    private String name;
    private String description;
    private double price;
    private List<Image> images;
    private int total;
}
