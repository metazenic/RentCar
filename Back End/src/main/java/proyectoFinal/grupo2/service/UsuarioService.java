package proyectoFinal.grupo2.service;

import proyectoFinal.grupo2.model.LogInDtoResponse;
import proyectoFinal.grupo2.model.UsuarioDto;
import proyectoFinal.grupo2.persistence.Usuario;

public interface UsuarioService {
    LogInDtoResponse crearUsuario(Usuario u) throws Exception;
}
