package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proyectoFinal.grupo2.persistence.Categoria;


public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
