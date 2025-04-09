package nlu.modeltradeapi.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Model implements Serializable {
    private String id;
    private User user;
    private String name;
    private String description;
    private double price;
    private List<Image> images;
    private int total;
}
