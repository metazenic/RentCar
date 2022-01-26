package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import proyectoFinal.grupo2.persistence.Usuario;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    @Query("select u from Usuario u where u.email = ?1")
    Optional<Usuario> getUserByEmail(String email);

}
