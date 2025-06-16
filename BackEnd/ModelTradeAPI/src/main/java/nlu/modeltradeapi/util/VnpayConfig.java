package nlu.modeltradeapi.util;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "vnpay")
public class VnpayConfig {
    private String vnp_TmnCode;
    private String vnp_HashSecret;
    private String vnp_Url;
    private String return_Url;
}

