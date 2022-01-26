package proyectoFinal.grupo2.service;

import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.persistence.Puntuaciones;

import java.util.List;

public interface PuntuacionesService {
    List<Puntuaciones> listarPorProducto(Long id) throws NotFoundException;
    Puntuaciones guardarPuntuacion(Puntuaciones puntuacion) throws NotFoundException, BadRequestException;
}
