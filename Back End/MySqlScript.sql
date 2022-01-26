USE prueba;

CREATE TABLE productos(
	id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion VARCHAR(250)
);


CREATE TABLE caracteristicas(
	id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(150),
    icono VARCHAR(255)
);

CREATE TABLE ciudades (
	id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    nombre_pais VARCHAR(250)
);

CREATE TABLE imagenes(
	id INT NOT NULL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    url VARCHAR(250)
);

CREATE TABLE categoria(
	id INT NOT NULL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion VARCHAR(250),
    url VARCHAR(250)
);
