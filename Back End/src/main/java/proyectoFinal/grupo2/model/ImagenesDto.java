package proyectoFinal.grupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;
import proyectoFinal.grupo2.persistence.Producto;

@Data
public class ImagenesDto {
    private Long id;
    private String titulo;
    private String url;
    @JsonIgnoreProperties("imagenes")
    private Producto producto;

    public ImagenesDto(){}
}
