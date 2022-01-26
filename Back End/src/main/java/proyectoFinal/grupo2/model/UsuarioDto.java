package proyectoFinal.grupo2.model;

import lombok.Data;
import proyectoFinal.grupo2.persistence.Rol;
import proyectoFinal.grupo2.persistence.Puntuaciones;

import java.util.List;

@Data
public class UsuarioDto {

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private int edad;
    private Rol rol;


    public UsuarioDto() {
    }
}
