package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter @Setter
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descripcion;
    private String url;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "categoria")
    @JsonIgnoreProperties("categoria")
    private List<Producto> productos;

    public Categoria() {
    }
}
