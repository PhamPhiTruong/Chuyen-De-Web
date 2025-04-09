package nlu.modeltradeapi.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    private String id;
    private Address address;
    private String email;
    private String password;
    private String name;
    private String phoneNumber;
    private int role;
    private Image image;
    private double totalMoney;
}
