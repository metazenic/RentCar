package proyectoFinal.grupo2.service;

import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.model.BuscarPorCiudadYFechaDtoRequest;
import proyectoFinal.grupo2.model.ProductoDto;

import java.util.List;

public interface ProductoService extends CrudService<ProductoDto>{
    public List<ProductoDto> listarProductosPorCategoria(Long id) throws NotFoundException, BadRequestException;
    public List<ProductoDto> listarProductosPorCiudades(Long id) throws NotFoundException, BadRequestException;
    List<ProductoDto> filtrarPorCiudad_y_Fechas(BuscarPorCiudadYFechaDtoRequest dto) throws Exception;
}
