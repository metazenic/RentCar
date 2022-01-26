package proyectoFinal.grupo2.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.email.EmailService;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.UserNameExistsException;
import proyectoFinal.grupo2.model.FavoritoDto;
import proyectoFinal.grupo2.model.LogInDtoResponse;
import proyectoFinal.grupo2.model.ProductoDto;
import proyectoFinal.grupo2.persistence.*;
import proyectoFinal.grupo2.repository.FavoritoRepository;
import proyectoFinal.grupo2.repository.ProductoRepository;
import proyectoFinal.grupo2.repository.UsuarioRepository;
import proyectoFinal.grupo2.security.JwtUtil;
import proyectoFinal.grupo2.service.UsuarioService;

import java.util.*;

@Service
public class UsuarioServiceImpl implements UsuarioService, UserDetailsService {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    FavoritoRepository favoritoRepository;
    @Autowired
    ProductoRepository productoRepository;
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    EmailService emailService;
    @Autowired
    JwtUtil jwtUtil;


    @Override
    public LogInDtoResponse crearUsuario(Usuario u) throws UserNameExistsException{
        if(usuarioRepository.getUserByEmail(u.getEmail()).isPresent())
            throw new UserNameExistsException("El usuario ya existe");
        Rol rol = new Rol();
        rol.setId(1);
        rol.setNombre("USER");
        u.setRol(rol);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
        u.setPassword(encoder.encode(u.getPassword()));
        u.setActive(false);
        u.setActivationCode(RandomStringUtils.randomAlphanumeric(16));
        final UserDetails userDetails = createNewUserDetails(u);
        final String jwt = jwtUtil.generateToken(userDetails);
        usuarioRepository.save(u);
        LogInDtoResponse logInDtoResponse = new LogInDtoResponse();
        logInDtoResponse.setNombre(u.getNombre());
        logInDtoResponse.setApellido(u.getApellido());
        logInDtoResponse.setEmail(u.getEmail());
        logInDtoResponse.setJwt(jwt);
        logInDtoResponse.setStatus("201");
        emailService.sendSimpleMessage(u.getEmail(),"Registro exitoso",u.getNombre()+" "+u.getApellido()+": \n"+ "Bienvenido a Rent Cars. Gracias por registrate. Por favor activa tu cuenta entrando a: http://localhost:3000/activation?email="+u.getEmail()+"&activationCode="+u.getActivationCode());
        return logInDtoResponse;
    }


    @Override
    public UserDetails loadUserByUsername(String s) {
        Optional<Usuario> usuario = usuarioRepository.getUserByEmail(s);
        Set<GrantedAuthority> autorizaciones=new HashSet<GrantedAuthority>();

        GrantedAuthority autorizacion = new SimpleGrantedAuthority(usuario.get().getRol().getNombre());

        autorizaciones.add(autorizacion);

        User userDetail = new User(usuario.get().getEmail(),usuario.get().getPassword(), autorizaciones);
        return userDetail;
    }
    public UserDetails createNewUserDetails(Usuario u) throws UsernameNotFoundException {
        if(u.getRol()==null){
            Rol rol = new Rol();
            rol.setId(1);
            rol.setNombre("USER");
            u.setRol(rol);
        }
        Set<GrantedAuthority> autorizaciones=new HashSet<GrantedAuthority>();
        GrantedAuthority autorizacion = new SimpleGrantedAuthority(u.getRol().getNombre());
        autorizaciones.add(autorizacion);

        User userDetail = new User(u.getEmail(),u.getPassword(), autorizaciones);
        return userDetail;
    }

    public Optional<Usuario> getByEmail(String email){
        return usuarioRepository.getUserByEmail(email);
    }

    public List<FavoritoDto> buscarFavoritos(String email){
        Usuario usuario = usuarioRepository.getUserByEmail(email).get();
        List<Favorito> lista = favoritoRepository.findByUsuario(usuario.getId());
        List<FavoritoDto> listaDto = new ArrayList<>();
        for(int i = 0; i<lista.size(); i++){
            Producto producto = lista.get(i).getProducto();
            ProductoDto dto = objectMapper.convertValue(producto, ProductoDto.class);
            List<Puntuaciones> puntuaciones = producto.getPuntuaciones();
            Integer sum = 0;
            Float promedio = 0F;
            if(puntuaciones.size() != 0) {
                for (Puntuaciones puntuacion: puntuaciones){
                    sum += puntuacion.getPuntuacion();
                }
                promedio = sum.floatValue() / puntuaciones.size();
            }

            dto.setPuntuacionPromedio(promedio);
            FavoritoDto fav = new FavoritoDto();
            fav.setProductoDto(dto);
            listaDto.add(fav);
        }
        return listaDto;
    }

    public LogInDtoResponse logIn(Usuario u) throws BadRequestException {
        Usuario usuario = getByEmail(u.getEmail()).orElse(null);
        if(!usuario.isActive())
            throw new BadRequestException("Por favor activa tu cuenta");
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(u.getEmail(),u.getPassword())
            );
            final UserDetails userDetails = loadUserByUsername(u.getEmail());
            final String jwt = jwtUtil.generateToken(userDetails);
            LogInDtoResponse logInDtoResponse = new LogInDtoResponse();
            logInDtoResponse.setJwt(jwt);
            logInDtoResponse.setEmail(u.getEmail());
            logInDtoResponse.setNombre(getByEmail(u.getEmail()).get().getNombre());
            logInDtoResponse.setApellido(getByEmail(u.getEmail()).get().getApellido());
            logInDtoResponse.setStatus("200");
            logInDtoResponse.setRol(usuario.getRol().getNombre());
            return logInDtoResponse;
    }catch (Exception e){
            throw new BadRequestException("Email o contraseña incorrecta");
        }
}

    public String crearFavorito(Favorito favorito){
        favorito.setUsuario(getByEmail(favorito.getUsuario().getEmail()).get());
        List<Favorito> lista = favoritoRepository.findByUsuario(favorito.getUsuario().getId());
        for(int i =0; i<lista.size();i++){
            if(lista.get(i).getProducto().getId().equals(favorito.getProducto().getId())){
                Favorito f = favoritoRepository.findByFavorito(favorito.getUsuario().getId(),favorito.getProducto().getId());
                favoritoRepository.deleteById(f.getId());
                return "Se elimino el favorito";
        }}
        favoritoRepository.save(favorito);
        return "Exito";
    }

    public Long getId(String email){
        return getByEmail(email).get().getId();
    }

    public String activarCuenta(String email, String activationCode) throws BadRequestException {
        Optional <Usuario> u = getByEmail(email);
        if (u.isEmpty()){
            throw new BadRequestException("El email es incorrecto.");
        }
       try{
        if(u.get().getActivationCode().equals(activationCode)) {
            u.get().setActive(true);
            u.get().setActivationCode(null);
            usuarioRepository.save(u.get());
            return "La cuenta ha sido activada.";
        }}catch(Exception e){
            throw new BadRequestException("La cuenta ya esta activa.");
           }
        if(!u.get().getActivationCode().equals(activationCode)){
            throw new BadRequestException("El codigo es incorrecto.");
        }

        return "La cuenta ya esta activa.";

    }
}

