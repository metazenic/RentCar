package proyectoFinal.grupo2.controller;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.UserNameExistsException;
import proyectoFinal.grupo2.model.LogInDtoResponse;
import proyectoFinal.grupo2.model.UsuarioDto;
import proyectoFinal.grupo2.persistence.Favorito;
import proyectoFinal.grupo2.persistence.Rol;
import proyectoFinal.grupo2.persistence.Usuario;
import proyectoFinal.grupo2.service.impl.UsuarioServiceImpl;
import proyectoFinal.grupo2.security.JwtUtil;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping("/user")
public class UserController {

    @Autowired
    UsuarioServiceImpl usuarioService;



    @PostMapping("/register")
    ResponseEntity<?> crearUsuario(@RequestBody Usuario u) throws Exception {
        return ResponseEntity.status(201).body(usuarioService.crearUsuario(u));
    }


    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody Usuario u) throws Exception {
        return ResponseEntity.ok(usuarioService.logIn(u));
    }

    @GetMapping("/favoritos/")
    public ResponseEntity<?> favoritos(@RequestParam String email){
        return ResponseEntity.ok(usuarioService.buscarFavoritos(email));
    }

    @PostMapping("/favoritos")
    public ResponseEntity<?> crearFavoritos(@RequestBody Favorito f){
        return ResponseEntity.ok(usuarioService.crearFavorito(f));
    }
    @GetMapping("/{email}")
    public ResponseEntity<?> buscarId(@PathVariable String email){
        return ResponseEntity.ok(usuarioService.getId(email));
    }
    @PostMapping("/activation")
    public ResponseEntity<?> activaCuenta(@RequestParam String email, @RequestParam String activationCode) throws BadRequestException {
        return ResponseEntity.ok(usuarioService.activarCuenta(email,activationCode));
    }
}
