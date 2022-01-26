# Certified Tech Dev - Proyecto Integrador

# GRUPO 2 - Back End

Se hizo una API REST para la utilizacion de categorias. 

El proyecto esta sta dividido en los siguientes paquetes:

- Repository: contiene la conexion a la base de datos utilizando el ORM de hibernate.
- Entities: contiene la clase Categoria con la cual se enlaza a la tabla con el mismo nombre en la base de datos.
- Service: contiene la logica de todas las operaciones CRUD.
- Model: contiene el DTO de categoria.
- Controller: contiene todos los end points de las operaciones crud
- Exceptions: contiene Not Found y Bad Request exceptions para un mejor manejo de los errores.


# Entities

    categoria : {
        "id": "1",
        "titulo": "economicos",
        "descripcion": "economicos",
        "url": ""
    }

## Endpoints

-  Buscar por id: `GET` a `PATH/buscar/{id}`


-  Registrar nuevo: `POST` a `PATH/guardar`
  
      
-  Actualizar existente: `PUT` a `PATH/actualizar`

    ----> Para este end point requiere el id de la categoria a actualizar y se supone que se quiere actualizar los campos enviados que no son null 
        
-  Eliminar por id: `DELETE` a `PATH/eliminar/{id}`

-  Obtener todos: `GET` a `PATH/lista`

### Base de datos

El motor de base de datos es MySQL, la DB se crea automaticamente si no existe gracias a la configuracion "createDatabaseIfNotExist=true" y los datos persisten al cierre de la aplicacion.


#### Tabla

![alt text](https://gitlab.com/proyecto-integrador-0321/camada-3/grupo-2/-/raw/main/Back%20End/tabla_categoria.png)


##### DTO 

categoriaDto : {
        "id": "1",
        "titulo": "economicos",
        "descripcion": "economicos",
        "url": ""
    }


