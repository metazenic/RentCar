package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proyectoFinal.grupo2.persistence.Producto;
import proyectoFinal.grupo2.persistence.Puntuaciones;

import java.util.List;

public interface PuntuacionesRepository  extends JpaRepository<Puntuaciones, Long> {
    List<Puntuaciones> findByProducto(Producto producto);
}
