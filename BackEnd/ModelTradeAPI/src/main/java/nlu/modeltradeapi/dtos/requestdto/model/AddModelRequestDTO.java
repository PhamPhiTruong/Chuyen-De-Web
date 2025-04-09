package nlu.modeltradeapi.dtos.requestdto.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import nlu.modeltradeapi.entities.Image;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddModelRequestDTO {
    private String name;
    private String description;
    private double price;
    private List<Image> images;
    private int total;
}
