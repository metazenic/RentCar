package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
public class Favorito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JsonIgnoreProperties("favoritos")
    @JoinColumn(name="id_usuario", referencedColumnName = "id")
    private Usuario usuario;
    @ManyToOne
    @JsonIgnoreProperties("favoritos")
    @JoinColumn(name="id_producto", referencedColumnName = "id")
    private Producto producto;

    public Favorito() {
    }
}
