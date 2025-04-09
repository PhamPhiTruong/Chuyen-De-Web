package nlu.modeltradeapi.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Address implements Serializable {
    private String id;
    private String detail; // Địa chỉ cụ thể
    private String province; // Tỉnh
    private String city; // Thành phố
    private String ward; //Phường
}
