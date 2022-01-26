package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String url;

    @ManyToOne
    @JoinColumn(name="id_imagen", referencedColumnName = "id")
    @JsonIgnoreProperties("imagenes")
    private Producto producto;

    public Imagen(){}

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
