package nlu.modeltradeapi.util.entity_mapper;

import nlu.modeltradeapi.dtos.responsedto.vnpay.PayVNPResponseDTO;
import nlu.modeltradeapi.entities.Pay;
import org.mapstruct.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Mapper(componentModel = "spring")
public interface PayMapper {

    DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");

    @Mapping(source = "payDate", target = "payDate", qualifiedByName = "stringToLocalDateTime")
    Pay toEntity(PayVNPResponseDTO dto);

    @Named("stringToLocalDateTime")
    static LocalDateTime stringToLocalDateTime(String dateStr) {
        if (dateStr == null || dateStr.isBlank()) return null;
        return LocalDateTime.parse(dateStr, FORMATTER);
    }

    // Nếu cần map ngược (entity → DTO)
    @Mapping(source = "payDate", target = "payDate", qualifiedByName = "localDateTimeToString")
    PayVNPResponseDTO toDto(Pay entity);

    @Named("localDateTimeToString")
    static String localDateTimeToString(LocalDateTime date) {
        if (date == null) return null;
        return date.format(FORMATTER);
    }
}
