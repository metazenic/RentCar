package proyectoFinal.grupo2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.persistence.Caracteristica;
import proyectoFinal.grupo2.repository.CaracteristicaRepository;
import proyectoFinal.grupo2.service.CaracteristicaService;

import java.util.List;

@Service
public class CaracteristicaServiceImpl implements CaracteristicaService {
    @Autowired
    CaracteristicaRepository caracteristicaRepository;

    public List<Caracteristica> getAll(){
        return caracteristicaRepository.findAll();
    }
}
