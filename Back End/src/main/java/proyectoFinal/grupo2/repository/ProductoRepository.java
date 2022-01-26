package proyectoFinal.grupo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.persistence.Categoria;
import proyectoFinal.grupo2.persistence.Ciudad;
import proyectoFinal.grupo2.persistence.Producto;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    public List<Producto> findByCiudad(Ciudad ciudad);
    public List<Producto> findByCategoria(Categoria categoria) throws NotFoundException, BadRequestException;
}
