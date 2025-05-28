package nlu.modeltradeapi.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "models")
@Entity(name = "model")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Model implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "model_id")
    String modelId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @Column(name = "name")
    String name;
    @Lob
    @Column(name = "description", columnDefinition = "TEXT")
    String description;
    @Column(name = "price")
    double price;
    @Column(name = "quantity")
    int quantity;
    @Column(name = "see")
    @Builder.Default
    boolean see = false;
    @Column(name = "is_delete")
    @Builder.Default
    boolean isDelete = false;
    @OneToMany(mappedBy = "model", cascade = CascadeType.ALL, orphanRemoval = true)
    List<ModelImage> images;
}
