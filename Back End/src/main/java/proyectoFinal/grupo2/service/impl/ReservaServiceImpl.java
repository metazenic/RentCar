package proyectoFinal.grupo2.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.email.EmailService;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.model.ProductoDto;
import proyectoFinal.grupo2.model.ReservaDto;
import proyectoFinal.grupo2.persistence.Producto;
import proyectoFinal.grupo2.persistence.Reserva;
import proyectoFinal.grupo2.persistence.Usuario;
import proyectoFinal.grupo2.repository.ProductoRepository;
import proyectoFinal.grupo2.repository.ReservaRepository;
import proyectoFinal.grupo2.repository.UsuarioRepository;
import proyectoFinal.grupo2.service.ReservaService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaServiceImpl implements ReservaService {

    @Autowired
    ReservaRepository reservaRepository;
    @Autowired
    ProductoRepository productoRepository;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    ProductoServiceImpl productoService;
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    EmailService emailService;

    public ReservaDto crearReserva(Reserva reserva) throws NotFoundException, BadRequestException {
        ProductoDto pr = productoService.buscar(reserva.getProducto().getId());
        reserva.setProducto(objectMapper.convertValue(pr,Producto.class));
        reserva.setUsuario(usuarioRepository.getUserByEmail(reserva.getUsuario().getEmail()).get());
        if(!reserva.getUsuario().isActive())
            throw new BadRequestException("La cuenta del usuario no esta activa.");
        List<LocalDate> fechasNodisponibles = productoService.fechasNoDisponibles(pr.getId());
        for(int i =0;i<fechasNodisponibles.size();i++){
            if(reserva.getFechaInicial().plusDays(1).isEqual(fechasNodisponibles.get(i)) || reserva.getFechaFinal().plusDays(1).isEqual(fechasNodisponibles.get(i)))
                throw new BadRequestException("Las fechas no estan disponibles");
        }
        ReservaDto dto = objectMapper.convertValue(reservaRepository.save(reserva), ReservaDto.class);
        dto.setStatus(201);
        emailService.sendSimpleMessage(reserva.getUsuario().getEmail(), "Reserva creada exitosamente.", "La reserva para el "+reserva.getFechaInicial()+" a las "+reserva.getStartHour()+" hasta el "+reserva.getFechaFinal()+" se creo exitosamente.");
        return dto;
    }

    public List<ReservaDto> getAll(){
        List<ReservaDto> lista = new ArrayList<>();
        for(Reserva r : reservaRepository.findAll())
            lista.add(objectMapper.convertValue(r,ReservaDto.class));
        return lista;
    }

    public List<ReservaDto> buscarPorIdDeProducto(Long id){
        Optional<Producto> producto = productoRepository.findById(id);
        List<ReservaDto> lista = new ArrayList<>();
        for (Reserva r: reservaRepository.findByProducto(producto.get())) {
            lista.add(objectMapper.convertValue(r,ReservaDto.class));
        }
        return lista;
    }

    public List<ReservaDto> buscarPorUsuario(String email){
        Usuario usuario = usuarioRepository.getUserByEmail(email).get();
        List<Reserva> lista = reservaRepository.findByUsuario(usuario);
        List<ReservaDto> listaDto = new ArrayList<>();
        for(int i = 0; i< lista.size();i++){
            listaDto.add(objectMapper.convertValue(lista.get(i),ReservaDto.class));
        }
        return listaDto;
    }
}
