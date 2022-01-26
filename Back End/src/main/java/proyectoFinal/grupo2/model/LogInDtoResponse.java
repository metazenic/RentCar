package proyectoFinal.grupo2.model;

import lombok.Data;

@Data
public class LogInDtoResponse {

    private String nombre;
    private String jwt;
    private String email;
    private String apellido;
    private String status;
    private String rol;
}
