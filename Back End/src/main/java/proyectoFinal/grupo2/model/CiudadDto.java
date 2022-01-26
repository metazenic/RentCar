package proyectoFinal.grupo2.model;

import lombok.Data;
import proyectoFinal.grupo2.persistence.Producto;

import java.util.List;

@Data
public class CiudadDto {

    private Long id;
    private String nombre;
    private String pais;
    private String coordenadas;

    public CiudadDto(){}
}
