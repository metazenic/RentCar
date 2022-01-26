package proyectoFinal.grupo2.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectoFinal.grupo2.exceptions.BadRequestException;
import proyectoFinal.grupo2.exceptions.NotFoundException;
import proyectoFinal.grupo2.model.CategoriaDto;
import proyectoFinal.grupo2.persistence.Categoria;
import proyectoFinal.grupo2.repository.CategoriaRepository;
import proyectoFinal.grupo2.service.CategoriaService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Override
    public CategoriaDto guardar(CategoriaDto categoriaDto) throws BadRequestException {
        if(categoriaDto==null)
            throw new BadRequestException("No se puede crear una categoria null");
        Categoria categoria = objectMapper.convertValue(categoriaDto, Categoria.class);
        return objectMapper.convertValue(categoriaRepository.save(categoria), CategoriaDto.class);
    }

    @Override
    public CategoriaDto buscar(Long id) throws NotFoundException, BadRequestException {
        if(id==null)
            throw new BadRequestException("El id no puede ser null");
        Optional <Categoria> cat = categoriaRepository.findById(id);
        if(cat.isEmpty())
            throw new NotFoundException("El id no existe.");
        return objectMapper.convertValue(cat.get(), CategoriaDto.class);
    }

    @Override
    public String eliminar(Long id) throws NotFoundException, BadRequestException {
        if(id==null)
            throw new BadRequestException("El id no puede ser null");
        Optional <Categoria> cat = categoriaRepository.findById(id);
        if (cat.isEmpty())
            throw new NotFoundException("El id no existe.");
        categoriaRepository.deleteById(id);
        return "La categoria ha sido eliminada";
    }

    @Override
    public List<CategoriaDto> buscarTodos() {
        List<Categoria> cat = categoriaRepository.findAll();
        List<CategoriaDto> catDto = new ArrayList<>();
        for (Categoria c: cat) {
            catDto.add(objectMapper.convertValue(c, CategoriaDto.class));
        }
        return catDto;
    }

    @Override
    public CategoriaDto actualizar(CategoriaDto categoriaDto) throws NotFoundException, BadRequestException {

        if(categoriaDto==null)
            throw new BadRequestException("No se puede actualizar una categoria null");
        if(categoriaDto.getId()==null)
            throw new BadRequestException("Error: para actualizar una categoria, el id tiene que estar presente");

       Optional<Categoria> categoria = categoriaRepository.findById(categoriaDto.getId());

       //Asumo que los atributos que no son null en el dto son los que se quieren actualizar
        if (categoria.isPresent()) {
            if(categoriaDto.getDescripcion()!=null)
                categoria.get().setDescripcion(categoriaDto.getDescripcion());
            if(categoriaDto.getTitulo()!=null)
                categoria.get().setTitulo(categoriaDto.getTitulo());
            if(categoriaDto.getUrl()!=null)
                categoria.get().setUrl(categoriaDto.getUrl());
            return objectMapper.convertValue(categoriaRepository.save(categoria.get()), CategoriaDto.class);
        } else{
            throw new NotFoundException("El id no existe.");
        }
    }
}
