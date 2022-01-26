# Certified Tech Dev - Proyecto Integrador

<<<<<<< HEAD
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
=======
# CTD-GRUPO 2 - Back End

# Configuracion

Luego de descargar el repositorio correr clean y package en IntelliJ (o poner run en el main si se quiere ahorrar tiempo). Si se va a usar de manera local, se debe tener abierto MySQL workbench y hacer el log in con su usuario y contraseña. Luego ir a src/main/resources/application.properties y colocar tus datos en  spring.datasource.username= {username} --------  spring.datasource.password= {password}. Tambien recordar configurar la conexion de manera local de esta forma spring.datasource.url=jdbc:mysql://localhost:3306/digital_booking?createDatabaseIfNotExist=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC. 
Para conectarse con aws usar: spring.datasource.url=jdbc:mysql://digital_booking.cpz0bsr0ygf4.us-east-1.rds.amazonaws.com:3306/digital_booking?createDatabaseIfNotExist=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC y el usuario y la contraseña correspondiente al grupo 2.
Si no tiene la informacion que se supone que este en la base datos se recomienda borrar la base datos y reiniciar el backend asi los datos iniciales correctos son cargados.


Una vez que se inicie la aplicacion, spring va a chequear si existe la base de datos y crearla si no existe. 

Spring web security: existen dos tipos de usuario: "USER" y "ADMIN". Por default todas las cuentas creadas en el sitio son "USER". Para crear reservas hace falta tener autorizacion de "USER" por lo que se debe enviar el jwt en el header. Cada vez que una cuenta es creada o se inicie sesion, un token nuevo sera generado. Este token tiene fecha de vencimiento por lo que se pueden generar errores en la autorizacion si se usa un token viejo. Para modificar instancias de las entidades se requiere ser "ADMIN". El token jwt se requiere solo para crear reservas.


## Producto

    cars = {
        "id": 1,
        "nombre": "Reanult Sandero",
        "descripcion": "Norwegian forest kitty.Munchkin puma abyssinian , abyssinian . Bobcat ocicat or lion persian or bengal kitten. Bombay thai ocicat birman abyssinian.",
        "puntuacionPromedio": 4.0
        "categoria": {
            "id": 2,
            "titulo": "Familiar",
            "descripcion": "50 unidades disponibles",
            "url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Familiar.jpg",
        },
        "imagenes": [
            {
                "id": 1,
                "titulo": null,
                "url": "https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/1.jpg",
            }
        ],
        "ciudad": {
            "id": 1,
            "nombre": "Buenos Aires",
            "pais": "https://www.google.com/maps/place/Plaza+Oeste+Shopping/@-34.6117484,-58.6016318,12.08z/data=!4m13!1m7!3m6!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!2sBuenos+Aires,+CABA,+Argentina!3b1!8m2!3d-34.6036844!4d-58.3815591!3m4!1s0x95bcb8bc768e1ea5:0x292c54382e196f96!8m2!3d-34.6339518!4d-58.6294858",
        }
    }
 Comparacion con json de Front: 

- nombre = title
- descripcion = description
- categoria.titulo = category
- imagenes[1].url = img
- [ciudad.nombre, ciudad.pais] = location

###Reservas

    reservas = {
        "horaComienzoReserva": "11:00 AM"
        "fechaInicial":"2021-11-30T00:45:42.01Z",
        "fechaFinal": "2021-12-10T00:45:42.01Z",
        "usuario":{
            "email":"glgg"
        },
        "producto":{
        "id":8
         }
    }

    En el request se debe enviar el mail del usuario y tiene que ser uno existente en la base de datos.


#### Endpoints

Autos:

-  Buscar auto por id: `GET` a `PATH/Producto/{id}`  id es el id del auto

-  Buscar todos los autos: `GET` a `PATH/Producto/lista`

-  Buscar por categoria: "GET" a "/listarPorCategoria/{id}"  id es el id de la categoria

-  Buscar por ciudad: "GET" a "/listarPorCiudad/{id}"  id es el id de la ciudad

-  Buscar por fecha y ciudad: "POST" a "/buscar"

        request: {  fechaFinal: ,
                    fechaInicial: ,
                    ciudad: 
                  }
        Ningun campo es obligatorio.

        response: todos los autos disponibles en esa fecha (que ningun dia este reservado en el intervalo de fechas) y ciudad.


-  Buscar las fechas reservas para un auto: "GET" a "/nodisponible/{id}" donde id es el id del auto. Retorna array de fechas reservadas.



Reservas:

-  Crear reserva: "POST" a "/reservas/crear".

        request: enviar la entidad reserva como se muestra arriba. En el header debe ir este campo--->  Authorization: Bearer jwt. Donde jwt es el token creado por el back end cuando el usuario inicia sesion.


Usuario:

-  Crear usuario: "POST" a "user/register". Request: email, nombre, apellido, password. Retorna el token jwt.

-  Log in: "POST" a "user/login". Request: email, password. Retorna token jwt.
   

Ciudad:

-  Obtener todas las ciudades: "GET" a "ciudades/lista"

Categoria:

-  Obtener todas las categorias: `GET` a `PATH/categorias/lista`

-  Buscar categoria por id: `GET` a `PATH/categorias/{id}`








>>>>>>> b9564db413d5a365de1f11cc8a336e07fa41d2dd


