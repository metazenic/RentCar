package proyectoFinal.grupo2.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.model.CiudadDto;
import proyectoFinal.grupo2.persistence.Ciudad;
import proyectoFinal.grupo2.repository.CiudadRepository;
import proyectoFinal.grupo2.service.CiudadService;

import java.util.ArrayList;
import java.util.List;

@Service
public class CiudadServiceImpl implements CiudadService {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    CiudadRepository ciudadRepository;

    @Override
    public List<CiudadDto> buscarTodos() {
        List<Ciudad> lista = ciudadRepository.findAll();
        List<CiudadDto> listaDto = new ArrayList<>();
        for(Ciudad c : lista){
            listaDto.add(objectMapper.convertValue(c, CiudadDto.class));
        }
        return listaDto;
    }

    @Override
    public CiudadDto crearCiudad(CiudadDto ciudadDto) {
        Ciudad ciudad = objectMapper.convertValue(ciudadDto, Ciudad.class);
        return objectMapper.convertValue(ciudadRepository.save(ciudad), CiudadDto.class);
    }


}
