package proyectoFinal.grupo2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectoFinal.grupo2.model.CiudadDto;
import proyectoFinal.grupo2.service.impl.CiudadServiceImpl;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/ciudades")
public class CiudadController {

    @Autowired
    CiudadServiceImpl service;

    @GetMapping("/lista")
    public ResponseEntity<?> lista(){
        return ResponseEntity.ok(service.buscarTodos());
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crear(@RequestBody CiudadDto ciudad){
        return ResponseEntity.ok(service.crearCiudad(ciudad));
    }
}
