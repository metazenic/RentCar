package proyectoFinal.grupo2.persistence;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Table
@Entity(name = "Productos")
@Getter
@Setter
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nombre;
    @Column(length = 800)
    private String descripcion;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "producto")
    @JsonIgnore
    private List<Puntuaciones> puntuaciones;

    @ManyToOne
    @JoinColumn(name="id_categoria", referencedColumnName = "id")
    @JsonIgnoreProperties("productos")
    private Categoria categoria;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "producto")
    @JsonIgnoreProperties("producto")
    private List<Imagen> imagenes;

    @ManyToOne
    @JsonIgnoreProperties("productos")
    @JoinColumn(name="id_ciudad", referencedColumnName = "id")
    private Ciudad ciudad;

    @ManyToMany
    @JoinTable(
            name = "integracion_de_caracteristicas",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristicas_id")
    )
    @JsonIgnoreProperties("productos")
    private List<Caracteristica> caracteristicas;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "producto")
    @JsonIgnoreProperties("producto")
    private List<Reserva> reservas;

    public Producto(){}

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public void adjuntarImagenes(Imagen imagen) {this.imagenes.add(imagen);}

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public void asignarCaracteristicas(Caracteristica caracteristica) { this.caracteristicas.add(caracteristica); }

    public List<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }
}
