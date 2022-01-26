package proyectoFinal.grupo2.login;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import proyectoFinal.grupo2.persistence.Puntuaciones;

import javax.persistence.*;
import java.util.List;

//Clase de prueba para poder hacer la relación con la tarea opcional
@Entity(name = "usuarios")
@Table
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private int edad;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "usuario")
    @JsonIgnoreProperties("usuario")
    private List<Puntuaciones> puntuaciones;
}
