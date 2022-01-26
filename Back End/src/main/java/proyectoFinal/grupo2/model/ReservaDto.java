package proyectoFinal.grupo2.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import proyectoFinal.grupo2.persistence.Producto;
import proyectoFinal.grupo2.persistence.Usuario;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class ReservaDto {

    private Long id;
    private String startHour;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    @JsonIgnoreProperties("reservas")
    private Producto producto;
    @JsonIgnoreProperties({"reservas", "password", "rol", "edad"})
    private Usuario usuario;
    private int status;
}
