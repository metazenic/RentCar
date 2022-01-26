package proyectoFinal.grupo2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.persistence.Reserva;
import proyectoFinal.grupo2.service.ReservaService;
import proyectoFinal.grupo2.service.impl.ReservaServiceImpl;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.OPTIONS,RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    ReservaServiceImpl reservaService;

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarReservasPorIdProducto(@PathVariable Long id){
        return ResponseEntity.ok(reservaService.buscarPorIdDeProducto(id));
    }

    @PostMapping("/crear")
    public ResponseEntity<?> crearReserva(@RequestBody Reserva reserva) throws NotFoundException, BadRequestException {

        return ResponseEntity.ok( reservaService.crearReserva(reserva));
    }

    @GetMapping
    public ResponseEntity<?> buscarReservasPorEmail(@RequestParam String email){
        return ResponseEntity.ok(reservaService.buscarPorUsuario(email));
    }

}
