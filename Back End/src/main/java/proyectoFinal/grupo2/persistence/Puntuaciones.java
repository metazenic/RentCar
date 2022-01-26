package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table
@Entity(name = "puntuaciones")
@Getter
@Setter
public class Puntuaciones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int puntuacion;

    @ManyToOne
    @JoinColumn(name="producto_id", referencedColumnName = "id")
    @JsonIgnoreProperties("puntuaciones")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name="usuario_id", referencedColumnName = "id")
    @JsonIgnoreProperties("puntuaciones")
    private Usuario usuario;

    public void setPuntuacion(int puntuacion) {
        this.puntuacion = puntuacion;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
