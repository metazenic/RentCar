package proyectoFinal.grupo2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.persistence.Producto;
import proyectoFinal.grupo2.persistence.Puntuaciones;
import proyectoFinal.grupo2.repository.ProductoRepository;
import proyectoFinal.grupo2.repository.PuntuacionesRepository;
import proyectoFinal.grupo2.service.PuntuacionesService;

import java.util.List;

@Service
public class PuntuacionesServiceImpl implements PuntuacionesService {

    @Autowired
    ProductoRepository productoRepository;

    @Autowired
    PuntuacionesRepository puntuacionesRepository;

    @Override
    public List<Puntuaciones> listarPorProducto(Long id) throws NotFoundException {
        Producto producto = productoRepository.findById(id).orElse(null);
        if(producto==null){
            throw new NotFoundException("El id no existe.");
        }
        List<Puntuaciones> puntuaciones = puntuacionesRepository.findByProducto(producto);

        return puntuaciones;
    }

    @Override
    public Puntuaciones guardarPuntuacion(Puntuaciones puntuacion) throws NotFoundException, BadRequestException {
        if(puntuacion.getProducto().getId()==null){
            throw new BadRequestException("El id de producto no puede ser null");
        }
        Producto producto = productoRepository.findById(puntuacion.getProducto().getId()).orElse(null);
        if(producto==null){
            throw new NotFoundException("El id no existe.");
        }
        if(puntuacion.getPuntuacion() <1||puntuacion.getPuntuacion() >5){
            throw new BadRequestException("La puntuación debe estar en el rango de 1 a 5");
        }
        puntuacion.setProducto(producto);
        return puntuacionesRepository.save(puntuacion);
    }
}
