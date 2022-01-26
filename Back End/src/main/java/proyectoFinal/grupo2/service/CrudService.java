package proyectoFinal.grupo2.service;

import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;

import java.util.List;

public interface CrudService<T>{
    T guardar(T t) throws BadRequestException, NotFoundException;
    T buscar(Long id) throws NotFoundException, BadRequestException;
    String eliminar(Long id) throws NotFoundException, BadRequestException;
    List<T> buscarTodos();
    T actualizar(T t) throws NotFoundException, BadRequestException;
}
