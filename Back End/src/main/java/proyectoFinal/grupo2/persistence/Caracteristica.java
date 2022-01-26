package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter
@Setter
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String icono;

    @ManyToMany(mappedBy = "caracteristicas")
    @JsonIgnore
    private List<Producto> productos;

    public Caracteristica(){}
}
