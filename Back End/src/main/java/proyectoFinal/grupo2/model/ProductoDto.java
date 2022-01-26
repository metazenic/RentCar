package proyectoFinal.grupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import proyectoFinal.grupo2.persistence.*;

import java.util.List;

@Data
public class ProductoDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private Float puntuacionPromedio;
    @JsonIgnoreProperties("productos")
    private Categoria categoria;
    @JsonIgnoreProperties("producto")
    private List<Imagen> imagenes;
    @JsonIgnoreProperties("productos")
    private Ciudad ciudad;
    @JsonIgnoreProperties("producto")
    private List<Caracteristica> caracteristicas;
    private int status;

    public ProductoDto(){}
}