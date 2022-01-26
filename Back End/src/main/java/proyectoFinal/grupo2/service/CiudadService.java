package proyectoFinal.grupo2.service;

import proyectoFinal.grupo2.model.CiudadDto;

import java.util.List;

public interface CiudadService {
    List<CiudadDto> buscarTodos();
    CiudadDto crearCiudad(CiudadDto ciudadDto);
}
