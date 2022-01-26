package proyectoFinal.grupo2.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.exceptions.ReservaNotFound;
import proyectoFinal.grupo2.model.BuscarPorCiudadYFechaDtoRequest;
import proyectoFinal.grupo2.model.ProductoDto;
import proyectoFinal.grupo2.persistence.*;
import proyectoFinal.grupo2.repository.*;
import proyectoFinal.grupo2.service.ProductoService;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    CiudadRepository ciudadRepository;

    @Autowired
    ImagenRepository imagenRepository;

    @Autowired
    CaracteristicaRepository caracteristicaRepository;

    @Autowired
    PuntuacionesRepository puntuacionesRepository;

    @Autowired
    ReservaRepository reservaRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Override
    public ProductoDto guardar(ProductoDto productoDto) throws NotFoundException, BadRequestException {
        if(productoDto == null){
            throw new BadRequestException("No se puede crear un producto null");
        }
        Producto producto = objectMapper.convertValue(productoDto, Producto.class);
        Producto product = productoRepository.save(producto);
        Optional<Producto> productoPerseado = productoRepository.findById(product.getId());

        //Guardar las imagenes primero porque son las que manejan la relación
        List<Imagen> imagenes = productoDto.getImagenes();
        if(imagenes!=null){
            imagenes.forEach(imagen -> {
                imagen.setProducto(productoPerseado.get());
                imagenRepository.save(imagen);
            });
        }
        /*
        List<Caracteristica> caracteristicas = productoDto.getCaracteristicas();
        if(caracteristicas!=null){
            for (Caracteristica caracteristica: caracteristicas) {
                Optional<Caracteristica> caractPersist = caracteristicaRepository.findById(caracteristica.getId());
                producto.asignarCaracteristicas(caractPersist.get());
            }
        }
         */
        return objectMapper.convertValue(product, ProductoDto.class);
    }

    @Override
    public ProductoDto buscar(Long id) throws NotFoundException, BadRequestException {
        Integer sum = 0;
        Float promedio = 0F;
        if(id==null) {
            throw new BadRequestException("El id no puede ser null");
        }
        Optional<Producto> producto = productoRepository.findById(id);
        if(producto.isEmpty()){
            throw new NotFoundException("El id no existe.");
        }
        List<Puntuaciones> puntuaciones = producto.get().getPuntuaciones();
        if(puntuaciones.size() != 0) {
            for (Puntuaciones puntuacion: puntuaciones){
                sum += puntuacion.getPuntuacion();
            }
            promedio = sum.floatValue() / puntuaciones.size();
            sum = 0;
        }
        ProductoDto prDto = objectMapper.convertValue(producto.get(), ProductoDto.class);
        prDto.setPuntuacionPromedio(promedio);
        return prDto;
    }

    @Override
    public String eliminar(Long id) throws NotFoundException, BadRequestException {
        if(id==null){
            throw new BadRequestException("El id no puede ser null");
        }
        Producto producto = productoRepository.findById(id).orElse(null);
        if (producto== null){
            throw new NotFoundException("El id no existe.");
        }
        List<Imagen> imagenes = producto.getImagenes();
        if(imagenes != null) {
            ArrayList<Long> ids = new ArrayList<>();
            imagenes.forEach(
                    imagen -> {
                        ids.add(imagen.getId());
                    }
            );
            imagenRepository.deleteAllById(ids);
        }
        List<Puntuaciones> puntuaciones = producto.getPuntuaciones();
        if(puntuaciones!=null){
            ArrayList<Long> idsPuntuaciones = new ArrayList<>();
            puntuaciones.forEach(
                    puntuacion -> {
                        idsPuntuaciones.add(puntuacion.getId());
                    }
            );
            puntuacionesRepository.deleteAllById(idsPuntuaciones);
        }
        productoRepository.deleteById(id);
        return "El producto ha sido eliminado";
    }

    @Override
    public List<ProductoDto> buscarTodos() {
        List<Producto> productos = productoRepository.findAll();
        List<ProductoDto> productoDtos = new ArrayList<>();
        HashMap<Long, Float> puntuaciones = this.puntuacionesPromedio(productos);
        for (Producto c: productos) {
            ProductoDto prDto = objectMapper.convertValue(c, ProductoDto.class);
            if(puntuaciones.containsKey(c.getId())){
                prDto.setPuntuacionPromedio(puntuaciones.get(c.getId()));
            }else{
                prDto.setPuntuacionPromedio(0F);
            }
            productoDtos.add(prDto);
        }
        return productoDtos;
    }

    @Override
    public ProductoDto actualizar(ProductoDto productoDto) throws NotFoundException, BadRequestException {
        if(productoDto==null)
            throw new BadRequestException("No se puede actualizar un producto nulo");
        if(productoDto.getId()==null)
            throw new BadRequestException("Error: para actualizar un producto, el id tiene que estar presente");

        Optional<Producto> producto = productoRepository.findById(productoDto.getId());

        if (producto.isPresent()) {
            if(productoDto.getNombre()!=null) {
                producto.get().setNombre(productoDto.getNombre());
            }
            if(productoDto.getDescripcion()!=null) {
                producto.get().setDescripcion(productoDto.getDescripcion());
            }
            if(productoDto.getCategoria()!=null) {
                producto.get().setCategoria(productoDto.getCategoria());
            }
            if(productoDto.getCiudad()!=null) {
                producto.get().setCiudad(productoDto.getCiudad());
            }
            return objectMapper.convertValue(productoRepository.save(producto.get()), ProductoDto.class);
        } else{
            throw new NotFoundException("El id no existe.");
        }
    }

    @Override
    public List<ProductoDto> listarProductosPorCategoria(Long id) throws NotFoundException, BadRequestException{
        if (id == null){
            throw new BadRequestException("No se puede obtener los productos con categoria nula");
        }
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if(categoria.isEmpty()){
            throw new NotFoundException("La categoria no existe o no está asignada a ningún producto");
        }
        List<Producto> listaDeProductos = productoRepository.findByCategoria(categoria.get());
        List<ProductoDto> productoDtos = new ArrayList<>();
        HashMap<Long, Float> puntuaciones = this.puntuacionesPromedio(listaDeProductos);
        for (Producto producto: listaDeProductos) {
            ProductoDto prDto = objectMapper.convertValue(producto, ProductoDto.class);
            if(puntuaciones.containsKey(producto.getId())){
                prDto.setPuntuacionPromedio(puntuaciones.get(producto.getId()));
            }else{
                prDto.setPuntuacionPromedio(0F);
            }
            productoDtos.add(prDto);
        }
        return productoDtos;
    }

    @Override
    public List<ProductoDto> listarProductosPorCiudades(Long id)throws NotFoundException, BadRequestException{
        if (id == null){
            throw new BadRequestException("No se puede obtener los productos con ciudad nula");
        }
        Optional<Ciudad> ciudad = ciudadRepository.findById(id);
        if(ciudad.isEmpty()){
            throw new NotFoundException("La ciudad no existe o no está asignada a ningún producto");
        }
        List<Producto> listaDeProductos = productoRepository.findByCiudad(ciudad.get());
        List<ProductoDto> productoDtos = new ArrayList<>();
        HashMap<Long, Float> puntuaciones = this.puntuacionesPromedio(listaDeProductos);
        for (Producto producto: listaDeProductos) {
            ProductoDto prDto = objectMapper.convertValue(producto, ProductoDto.class);
            if(puntuaciones.containsKey(producto.getId())){
                prDto.setPuntuacionPromedio(puntuaciones.get(producto.getId()));
            }else{
                prDto.setPuntuacionPromedio(0F);
            }
            productoDtos.add(prDto);
        }
        return productoDtos;
    }



    @Override
    public List<ProductoDto> filtrarPorCiudad_y_Fechas(BuscarPorCiudadYFechaDtoRequest dto) throws Exception {
        if(dto.getFechaInicial().isBefore(LocalDate.now()))
            return new ArrayList<>();
        if(dto.getFechaFinal()==null || dto.getFechaInicial()==null ) {
            List<ProductoDto> lista5 = new ArrayList<>();
          for(Producto p : productoRepository.findByCiudad(ciudadRepository.getCiudadByNombre(dto.getCiudad()).get())) {
                lista5.add(objectMapper.convertValue(p, ProductoDto.class));
            }
          return lista5;
        }
        List<Producto> lista = productoRepository.findAll();
        List<ProductoDto> listaDto=new ArrayList<>();
        List<Producto> lista2 = new ArrayList<>();
        HashMap<Long, Float> puntuaciones = this.puntuacionesPromedio(lista);
        try{
        for(Producto p : lista){
            if(dto.getCiudad()==null || dto.getCiudad().equals("")){
                lista2.add(p);
            }else if(p.getCiudad().getNombre().equals(dto.getCiudad())){
                lista2.add(p);
        }}
        for(Producto p : lista2){
           List<Reserva> reservas = reservaRepository.findByProducto(p);
           boolean disponible = true;
           for(Reserva r : reservas){
               if( ((r.getFechaInicial().isAfter(dto.getFechaInicial())||r.getFechaInicial().isEqual(dto.getFechaInicial())) && (r.getFechaFinal().isBefore(dto.getFechaFinal()) || r.getFechaFinal().isEqual(dto.getFechaFinal())))    || ((r.getFechaInicial().isBefore(dto.getFechaInicial()) || r.getFechaInicial().isEqual(dto.getFechaInicial())) && (r.getFechaFinal().isAfter(dto.getFechaInicial()) || r.getFechaFinal().isEqual(dto.getFechaInicial()) )) || ((r.getFechaInicial().isBefore(dto.getFechaFinal()) || r.getFechaInicial().isEqual(dto.getFechaFinal())) && (r.getFechaFinal().isAfter(dto.getFechaFinal()) || r.getFechaFinal().isEqual(dto.getFechaFinal()) )) || ((r.getFechaInicial().isBefore(dto.getFechaInicial()) && r.getFechaFinal().isAfter(dto.getFechaFinal()))) || r.getFechaFinal().isEqual(dto.getFechaFinal()) || r.getFechaFinal().isEqual(dto.getFechaInicial()) || r.getFechaInicial().isEqual(dto.getFechaInicial()) || r.getFechaInicial().isEqual(dto.getFechaFinal()))  {
                   disponible = false;
                   break;
               }
           }
           if(disponible){
               ProductoDto prDto = objectMapper.convertValue(p, ProductoDto.class);
               if(puntuaciones.containsKey(p.getId())){
                   prDto.setPuntuacionPromedio(puntuaciones.get(p.getId()));
               }else{
                   prDto.setPuntuacionPromedio(0F);
               }

               listaDto.add(prDto);
           }
        }}catch (Exception ex){
            throw new ReservaNotFound("No hay producto disponible");
        }
        return listaDto;
    }

    public List<LocalDate> fechasNoDisponibles(Long id){
        List<Reserva> listaReservas = reservaRepository.findByProducto(productoRepository.getById(id));
        List<LocalDate> res = new ArrayList<>();
        for (Reserva r: listaReservas) {
            if(r.getFechaFinal()!=null && r.getFechaInicial()!=null && r.getFechaInicial().isBefore(r.getFechaFinal())){
            LocalDate diaAgregado = r.getFechaInicial().plusDays(1);
            while(diaAgregado.isBefore(r.getFechaFinal())){
                res.add(diaAgregado.plusDays(1));
                diaAgregado= diaAgregado.plusDays(1);
            }}
            if(r.getFechaFinal()!=null)
                res.add(r.getFechaFinal().plusDays(1));
            if(r.getFechaInicial()!=null)
                res.add(r.getFechaInicial().plusDays(1));
        }
        return res;
    }


    private HashMap<Long, Float> puntuacionesPromedio(List<Producto> list){
        HashMap<Long, Float> puntuacionesProm = new HashMap<>();
        Integer sum = 0;
        List<Puntuaciones> puntuaciones;
        Float promedio = 0F;
        for(Producto producto : list){
            puntuaciones = producto.getPuntuaciones();
            if(puntuaciones.size() != 0) {
                for (Puntuaciones puntuacion: puntuaciones){
                    sum += puntuacion.getPuntuacion();
                }
                promedio = sum.floatValue() / puntuaciones.size();
                puntuacionesProm.put(producto.getId(), promedio);
                sum = 0;
            }
        }
        return puntuacionesProm;
    }


}
