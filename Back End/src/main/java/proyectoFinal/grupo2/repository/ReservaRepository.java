package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import proyectoFinal.grupo2.persistence.Producto;
import proyectoFinal.grupo2.persistence.Reserva;
import proyectoFinal.grupo2.persistence.Usuario;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query("select r from Reserva r where r.producto.id = ?1")
    List<Reserva> getReservasByProductId(Long id);
    List<Reserva> findByProducto(Producto producto);
    List<Reserva> findByUsuario(Usuario usuario);
}
