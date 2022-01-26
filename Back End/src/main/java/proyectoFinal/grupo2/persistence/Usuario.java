package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.List;


@Entity
@Table
@Getter
@Setter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private int edad;
    private String activationCode;
    private boolean active;
    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "usuario")
    @JsonIgnore
    private List<Favorito> favoritos;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "usuario")
    @JsonIgnore
    private List<Puntuaciones> puntuaciones;

    @ManyToOne
    @JsonIgnoreProperties("usuarios")
    @JoinColumn(name="id_rol", referencedColumnName = "id")
    private Rol rol;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "usuario")
    @JsonIgnoreProperties("usuarios")
    private List<Reserva> reservas;



    public Usuario() {
    }

}
