package nlu.modeltradeapi.mock;

import nlu.modeltradeapi.entities.Address;
import nlu.modeltradeapi.entities.Image;
import nlu.modeltradeapi.entities.Model;
import nlu.modeltradeapi.entities.User;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class FakeDAO {
    List<Address> addresses = new ArrayList<>(
            List.of(
                    new Address("a1", "175/219, Trung Dung, TP.Bien Hoa, Tinh.DongNai","Dong Nai","Bien Hoa","Trung Dung0"),
                    new Address("a2","39/89, Trang Bom, TP.Bien Hoa, Tinh Dong Nai","Dong Nai", "Bien Hoa","Trang Bom")
            )
    );
    List<Image> imageList = new ArrayList<>(
            List.of(
                    new Image("i1","lmao.link", LocalDate.of(2025,1,1)),
                    new Image("i2","bruh.link",LocalDate.of(2025,1,5))
            )
    );
    List<User> users = new ArrayList<>(
            List.of(
                    new User("u1", addresses.get(0),"098phamphitruong@gmail.com","hello1234","Pham Phi Truong","0886373584",0,imageList.get(0),300.0),
                    new User("u2", addresses.get(1),"transon1234@example.com","world987","Tran Hoang Son","0991331636",0,imageList.get(1),200.0)
            )
    );

    List<Model> models = new ArrayList<>(
            List.of(
                    new Model("1",users.get(0),"Capybara","Nó rất mềm",34.0,imageList,3),
                    new Model("2", users.get(1),"Dino","Nó biết phun lửa",66.0,imageList,2)
            )
    );

    public User getUser(String id) {
        return users.get(Integer.parseInt(id));
    }

    public void addAddress(Address adr) {
        addresses.add(adr);
    }

    public Model getModel(String modelId) {
        return models.get(Integer.parseInt(modelId));
    }
}
