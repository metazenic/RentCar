package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proyectoFinal.grupo2.persistence.Imagen;

public interface ImagenRepository extends JpaRepository<Imagen, Long> {
}
