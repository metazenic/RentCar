package proyectoFinal.grupo2.model;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class BuscarPorCiudadYFechaDtoRequest {

    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private String ciudad;

    public BuscarPorCiudadYFechaDtoRequest(){};
}
