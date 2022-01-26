package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter
@Setter
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nombre;
    @Column
    private String pais;
    @Column
    private String coordenadas;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "ciudad")
    @JsonIgnoreProperties("ciudad")
    private List<Producto> productos;

    public Ciudad(){}
}
