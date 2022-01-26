package proyectoFinal.grupo2.model;

import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

@Data
public class CategoriaDto {

    private Long id;
    private String titulo;
    private String descripcion;
    private String url;

    public CategoriaDto(){}
}
