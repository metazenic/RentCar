package proyectoFinal.grupo2.repository;


import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import proyectoFinal.grupo2.persistence.Favorito;


import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Long> {
    @Query("select f from Favorito f where f.usuario.id= ?1")
    List<Favorito> findByUsuario(Long id);
    @Query("select f from Favorito f where f.usuario.id= ?1 and f.producto.id=?2")
    Favorito findByFavorito(Long id_user,Long id_producto);
}
