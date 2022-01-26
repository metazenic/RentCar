package proyectoFinal.grupo2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.model.BuscarPorCiudadYFechaDtoRequest;
import proyectoFinal.grupo2.model.ProductoDto;
import proyectoFinal.grupo2.persistence.Puntuaciones;
import proyectoFinal.grupo2.service.impl.ProductoServiceImpl;
import proyectoFinal.grupo2.service.impl.PuntuacionesServiceImpl;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping(path = "Producto")
public class ProductoController {

    @Autowired
    ProductoServiceImpl productoService;

    @Autowired
    PuntuacionesServiceImpl puntuacionesService;

    @GetMapping("/lista")
    public ResponseEntity<?> buscarTodos(){
        List<ProductoDto> lista = productoService.buscarTodos();
        return ResponseEntity.ok(lista);
    }

    @PostMapping("/guardar")
    public ResponseEntity<?> guardar(@RequestBody ProductoDto productoDto) throws BadRequestException, NotFoundException {
        ProductoDto dto = productoService.guardar(productoDto);
        dto.setStatus(201);
        return  ResponseEntity.ok(dto);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws NotFoundException, BadRequestException {
        ProductoDto producto = productoService.buscar(id);
        return ResponseEntity.ok(producto);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) throws NotFoundException, BadRequestException {
        String res = productoService.eliminar(id);
        return ResponseEntity.ok(res);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> actualizar(@RequestBody ProductoDto productoDto) throws NotFoundException, BadRequestException {
        ProductoDto producto = productoService.actualizar(productoDto);
        return ResponseEntity.ok(producto);
    }

    @GetMapping("/listarPorCategoria/{id}")
    public ResponseEntity<?> buscarTodosPorCategoria(@PathVariable Long id) throws NotFoundException, BadRequestException {
        List<ProductoDto> lista = productoService.listarProductosPorCategoria(id);
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/listarPorCiudad/{id}")
    public ResponseEntity<?> buscarTodosPorCiudad(@PathVariable Long id) throws NotFoundException, BadRequestException {
        List<ProductoDto> lista = productoService.listarProductosPorCiudades(id);
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/listarPuntuaciones/{id}")
    public ResponseEntity<List<Puntuaciones>> listarPuntuacionesPorProducto(@PathVariable Long id) throws NotFoundException{
        List<Puntuaciones> puntuaciones = puntuacionesService.listarPorProducto(id);
        return ResponseEntity.ok(puntuaciones);
    }

    @PostMapping("/guardarPuntuacion")
    public ResponseEntity<Puntuaciones> guardarPuntuacion(@RequestBody Puntuaciones puntuacion) throws NotFoundException, BadRequestException {
        Puntuaciones puntuaciones = puntuacionesService.guardarPuntuacion(puntuacion);
        return ResponseEntity.ok(puntuaciones);
    }
    @PostMapping("/buscar")
    public ResponseEntity<?> buscarPorCiudadYFecha(@RequestBody BuscarPorCiudadYFechaDtoRequest dto) throws Exception {
        return ResponseEntity.ok(productoService.filtrarPorCiudad_y_Fechas(dto));
    }

    @GetMapping("/nodisponible/{id}")
    public ResponseEntity<?> fechasNodisponibles(@PathVariable Long id){
        return ResponseEntity.ok(productoService.fechasNoDisponibles(id));
    }
}
