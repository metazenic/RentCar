package proyectoFinal.grupo2.model;

import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

@Data
public class CaracteristicaDto {
    private Long id;
    private String nombre;
    private String icon;

    public CaracteristicaDto(){}
}
