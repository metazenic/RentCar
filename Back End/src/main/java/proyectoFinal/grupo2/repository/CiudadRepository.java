package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import proyectoFinal.grupo2.persistence.Ciudad;

import java.util.Optional;

public interface CiudadRepository extends JpaRepository<Ciudad, Long> {
    Optional<Ciudad> getCiudadByNombre(String nombre);
 }
