package proyectoFinal.grupo2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.model.CategoriaDto;
import proyectoFinal.grupo2.persistence.Producto;
import proyectoFinal.grupo2.service.impl.CategoriaServiceImpl;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaServiceImpl categoriaService;


    @GetMapping("/lista")
    public ResponseEntity<?> buscarTodos(){
        List<CategoriaDto> lista = categoriaService.buscarTodos();
        return ResponseEntity.ok(lista);
    }

    @PostMapping("/guardar")
    public ResponseEntity<?> guardar(@RequestBody CategoriaDto categoriaDto) throws BadRequestException {
        return  ResponseEntity.ok(categoriaService.guardar(categoriaDto));
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) throws NotFoundException, BadRequestException {
        CategoriaDto cat = categoriaService.buscar(id);
        return ResponseEntity.ok(cat);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) throws NotFoundException, BadRequestException {
        String res = categoriaService.eliminar(id);
        return ResponseEntity.ok(res);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> actualizar(@RequestBody CategoriaDto categoriaDto) throws NotFoundException, BadRequestException {
        CategoriaDto cat = categoriaService.actualizar(categoriaDto);
        return ResponseEntity.ok(cat);
    }

}
