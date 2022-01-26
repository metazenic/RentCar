package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Table
@Entity
@Getter
@Setter
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String startHour;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;

    @ManyToOne
    @JsonIgnoreProperties("reservas")
    @JoinColumn(name="id_producto", referencedColumnName = "id")
    private Producto producto;

    @ManyToOne
    @JsonIgnoreProperties("reservas")
    @JoinColumn(name="id_usuario", referencedColumnName = "id")
    private Usuario usuario;
}
