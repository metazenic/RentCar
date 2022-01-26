package proyectoFinal.grupo2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectoFinal.grupo2.service.CaracteristicaService;
import proyectoFinal.grupo2.service.impl.CaracteristicaServiceImpl;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/caracteristicas")
public class CaracteriscaController {
    @Autowired
    CaracteristicaServiceImpl caracteristicaService;

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(caracteristicaService.getAll());
    }
}
