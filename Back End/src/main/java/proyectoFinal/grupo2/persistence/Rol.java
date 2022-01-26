package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import proyectoFinal.grupo2.persistence.Usuario;

import javax.persistence.*;
import java.util.List;

@Entity(name = "roles")
@Table
@Getter@Setter
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "rol")
    @JsonIgnoreProperties("rol")
    private List<Usuario> usuarios;

    public Rol() {
    }
}
