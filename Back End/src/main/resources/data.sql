USE digital_booking;

INSERT INTO digital_booking.categoria (id,descripcion,titulo,url) VALUES (1,"90 unidades disponibles","Compacto","https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Compacto.jpg");
INSERT INTO digital_booking.categoria (id,descripcion,titulo,url) VALUES (2,"50 unidades disponibles","Familiar","https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Familiar.jpg");
INSERT INTO digital_booking.categoria (id,descripcion,titulo,url) VALUES (3,"40 unidades disponibles","Todo Terreno","https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Todo+Terreno.jpg");
INSERT INTO digital_booking.categoria (id,descripcion,titulo,url) VALUES (4,"20 unidades disponibles","Lujo","https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Lujo.jpg");

INSERT INTO digital_booking.ciudad (id,nombre,pais, coordenadas) VALUES (1,"Buenos Aires","Argentina", "-34.8553 -58.5258");
INSERT INTO digital_booking.ciudad (id,nombre,pais, coordenadas) VALUES (2,"Bogota","Colombia", "4.60971 -74.08175");
INSERT INTO digital_booking.ciudad (id,nombre,pais, coordenadas) VALUES (3,"Mendoza","Argentina", "-32.8903 -68.8472");
INSERT INTO digital_booking.ciudad (id,nombre,pais, coordenadas) VALUES (4,"Medellin","Colombia", "6.217 -75.567");

INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (1,"La Volkswagen Suran posee motorización naftera de 1.6 litros, 16 válvulas y 110 CV, controles de estabilidad (ESP) y tracción (ASR), a lo que se suma la asistencia al arranque en pendientes y los faros antiniebla delanteros con encendido automático en curvas.","Volkswagen Suran",2,1);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (2,"Es un automóvil 4x4 del segmento B. Es un cinco plazas con carrocería de cinco puertas, motor delantero transversal que se ofrece a las cuatro ruedas. Está equipada con un motor de gasolina HR16DE 1.6L I4. Este motor genera 125 hp y 115 lb-ft/155 Nm de par. Nissan califica a este motor para recibir una clasificación de economía de combustible de la EPA de 31 millas por galón en ciudad y 36 millas por galón en carretera.","Nissan Kicss",3,2);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (3,"El Serie 3 G20 está basado en la plataforma CLAR de BMW y presenta un incrementado uso de acero de alta resistencia y aluminio. El diseñador en jefe del exterior fue Marc Michael Markfka. El G20 tiene una suspensión de doble horquilla y suspensión multibrazo, con un sistema de amortiguación hidráulico para absorber mejor los impactos.","BMW 330i",4,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (4,"Bajo el cofre, tiene un motor 2.0 litros de 149 hp y 146 lb-pie de torque. En seguridad incluye tecnologías como: frenado de emergencia con detección de peatones, frenado automático en reversa, asistente de luces altas, 10 bolsas de aire, advertencia de colisión frontal.","Nissan Sentra",2,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (5,"El Renault Duster tiene un motor de cuatro cilindros que cumple con la norme estandar sobre emisiones Euro 5. Se caracteriza por ofrecer un considerable espacio interior de 470 litros, en un chasis compacto.","Reanult Duster",3,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (6,"El Renault Clio adopta una estética tremendamente compacta que transmite solidez y deportividad. A nivel mecánico, el Clio va provisto de una nueva familia de motores TCe de gasolina, un 3 cilindros de 0,9 litros de cilindrada y un 4 cilindros de 1,2 litros, con unas emisiones de menos de 120 g/km.","Renault Clio",1,4);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (7,"El Golf presenta un sistema de frenado anti colisiones múltiples, un control de crucero adaptable, un asistente para permanecer en un mismo carril, un detector de fatiga del conductor, un sistema de reconocimiento de señales de tráfico y un sistema de estacionamiento automático. La motorización es de 1.2 litros TSI, con 85 CV SAE.","Wolkswagen Golf",1,1);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (8,"El Mercedez Benz C 63 AMG tiene un motor de 480 caballos de fuerza de potencia a 6800 rpm. Tiene una aceleracion de 0 a 100 km/h en 4.4 segundos y una velocidad maxima de 267 km/h. Posee asientos deportivos y  el tablero cuenta con un panel de cubierta deslizante central desplegable sobre una pantalla LCD a color para funciones de entretenimiento e información.","Mercedes Benz C63",4,2);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (9,"El Volkswagen Tao equilibra agilidad y comodidad. Cuenta con con frenos de disco en las cuatro ruedas, suspensión delantera tipo McPherson y suspensión trasera de barra de torsión y motor turbo de 1.5 litros —conocido como TSI Evo— de 158 hp y 184 lb-pie.","Volkswagen Tao",2,1);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (10,"El Peugeot 2008 posee airbags frontales y laterales para las plazas delanteras y de cortina para todas, programador y limitador de velocidad, asiento del conductor regulable en altura, retrovisores exteriores eléctricos, fijaciones para sillas infantiles ISOFIX y llantas de acero de 15 pulgadas.","Peugeot 2008",2,2);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (11,"El Peugeot 301 Allure viene con llantas de aleación de 15 pulgadas, frenos ABS con EBD, doble airbag frontal delantero, doble airbag lateral delantero, anclajes Isofix, control de estabilidad, tapizado en tela y equipo de audio con Bp3/Bluetooth/USB.","Peugeot 301 Allure",2,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (12,"El Fiat Panda posee  todas las cualidades que debe ofrecer un vehículo urbano: dimensiones compactas, facilidad de conducción, modularidad y coste reducido de uso. Con una superficie acristalada muy generosa, ideal para desenvolverse en el tráfico de la gran ciudad sin ningún problema.","Fiat Panda",2,4);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (13,"El Chevrolet Sedán DS 9 está compuesto por un motor naftero turboalimentado PureTech y un motor eléctrico combinados para erogar 225 CV, asociado a una caja automática de ocho marchas. De esta manera el DS 9 es capaz de recorrer 50 kilómetros, en modo de cero emisiones, con una batería de 11,9 kWh.","Chevrolet Sedán DS 9",4,1);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (14,"El Audi RS 5 Coupé posee un diseño inconfundible. El motor biturbo V6 2.9 con 331 kW (456 CV) y un par motor de 600 Nm es pura deportividad. Acelera de 0 a 100 km/h en tan solo 3,9 segundos y alcanza una velocidad máxima de 250 km/h, ampliable de forma opcional hasta los 280 km/h.","Audi RS 5 Coupé",4,2);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (15,"El Sonic RS es impulsado por un motor de cuatro cilindros 1.4 litros turbocargado que genera 138 caballos de fuerza y 148 libras-pie de torque, acoplado a una transmisión manual de seis velocidades. Posee reproductor de fotos y video, pantalla táctil de siete pulgadas, sistema MyLink y seis bocinas.","Chevrolet Sonic RS",1,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (16,"El Volkswagen e-p-1 está movido por un motor eléctrico de 83 CV de potencia máxima y 210 Nm de par máximo. Este motor mueve las ruedas delanteras y está alimentado por unas baterías de iones de litio con 32,3 kWh de capacidad útil. es sencillo, práctico y está bien construido. Permite acomodar a 4 adultos sin problemas.","Volkswagen e-up!",1,4);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (17,"El Nissan Versa ofrece calidad y diseño, sin dejar de lado las características que más lo distingue: una cabina espaciosa y un tren motor orientado al ahorro. Posee un cuadro de instrumentos digital, climatizador automático, faros de LED, cámara de visión trasera, llave inteligente equipo eléctrico, entre otros.","Nissan Versa",1,1);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (18,"El Chevrolet Spark Sedán es el el automóvil más pequeño de Chevrolet, posee un motor de 4 cilindros en línea de 1.4 litros y 98 caballos de fuerza y 94 lb / ft de torque. Incluye una cámara de marcha atrás estándar y 10 airbags. Además, vienen de serie con asistencia de estacionamiento trasero.","Chevrolet Spark Sedán",1,2);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (19,"La Volkswagen Amarok tiene para ofrecerte más potencia que nunca, con una estabilidad dinámica que la distingue del resto y una tecnología lista para ser tu soporte ideal en todas las condiciones.frece la combinación exclusiva de caja automática de 8 velocidades y doble tracción 4MOTION integral permanente Torsen.","Volkswagen Amarok",3,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (20,"La Toyota Hilux tiene una capacidad de carga permite hasta 1.040 kilogramos de carga. En cuanto a cotas todoterreno ofrece 27 grados de ángulo de entrada, 27 grados de ángulo de salida y 23 grados de ángulo ventral con una profundidad de vadeo de hasta 70 centímetros con una altura libre de 29,3 centrímetros","Toyota Hilux",3,4);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (21,"El Jeep Compass posee más de 70 funciones de seguridad de vanguardia, lo que brinda seguridad y protección detrás del volante. Además ofrece un estilo cómodo y moderno con interiores de calidad superior. Con un pabel frontal que posee pantallas flotantes Uconnect de última generación.","Jeep Compass",3,1);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (22,"La Hyundai Santa Fe ofrece un espacio interior gigantesco, con espacio de carga y pasajeros con 7 plazas de serie. Además cuenta con instrumentación digital con pantalla de 12,3”,conexión constante a internet y posibilidad de conexión remota al coche mediante una app para smartphones.","Hyundai Santa Fe",3,2);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (23,"El BMW Serie 4 posee faros de LED, acceso y arranque sin llave, servicios remotos, sistema multimedia con pantalla de 10,25 pulgadas, techo solar, asientos eléctricos y calefactados y cuadro de instrumentos parcialmente digital. Además de un buen equipo de asistentes a la conducción.","BMW Serie 4 Coupé",4,3);
INSERT INTO digital_booking.productos (id,descripcion,nombre,id_categoria,id_ciudad) VALUES (24,"El M4 emplea un motor de seis cilindros en línea con 2.993 centímetros cúbicos con doble árbol de levas en cabeza y turbocompresor. Presenta dos niveles de potencia. 480 caballos y 550 Nm de par para el M4 estándar.","BMW M4 Coupé",4,4);


INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (1,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/1.jpg",1);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (2,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/2.jpg",2);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (3,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/3.jpg",3);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (4,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/4.jpg",4);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (5,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/5.jpg",5);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (6,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/6.jpg",6);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (7,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/7.jpg",7);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (8,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/8.jpg",8);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (9,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+MercedesBenz/1.jpg",8);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (10,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+MercedesBenz/2.jpg",8);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (11,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+MercedesBenz/3.jfif",8);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (12,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+MercedesBenz/4.jpg",8);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (13,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+MercedesBenz/5.jpg",8);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (14,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+NissanSentra/1.jpeg",4);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (15,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+NissanSentra/2.jpg",4);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (16,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+NissanSentra/3.jpg",4);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (17,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+NissanSentra/4.jpg",4);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (18,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+NissanSentra/5.jpg",4);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (19,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Clio/1.jfif",6);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (20,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Clio/2.jpg",6);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (21,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Clio/3.jpg",6);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (22,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Clio/4.jpg",6);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (23,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Clio/5.jpg",6);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (24,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Gol/1.jpg",7);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (25,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Gol/2.jpg",7);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (26,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Gol/3.jpg",7);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (27,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Gol/4.jpg",7);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (28,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Gol/5.jpg",7);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (29,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/3.jpg",3);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (30,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/3.jpg",3);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (31,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/3.jpg",3);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (32,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/3.jpg",3);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (33,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/3.jpg",3);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (34,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Kicks/1.jpg",2);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (35,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Kicks/2.jpg",2);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (36,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Kicks/3.jpg",2);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (37,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Kicks/4.jpg",2);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (38,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Kicks/5.jpg",2);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (39,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Duster/1.jpeg",5);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (40,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Duster/2.jpg",5);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (41,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Duster/3.jpg",5);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (42,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Renault+Duster/4.jpeg",5);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (43,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Tao/3.jpeg",9);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (44,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Tao/4.jpg",9);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (45,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Tao/5.jpeg",9);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (46,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Tao/6.jpg",9);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (47,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+2008/1.jpg",10);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (48,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+2008/2.jpg",10);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (49,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+2008/3.jpg",10);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (50,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+2008/4.jpg",10);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (51,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+2008/5.jpg",10);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (52,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+2008/6.jpg",10);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (53,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+301+Allure/1.webp",11);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (54,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+301+Allure/2.webp",11);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (55,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+301+Allure/3.webp",11);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (56,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+301+Allure/4.webp",11);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (57,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Peugeot+301+Allure/5.webp",11);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (58,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Fiat+Panda/1.webp",12);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (59,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Fiat+Panda/2.webp",12);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (60,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Fiat+Panda/3.webp",12);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (61,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Fiat+Panda/4.webp",12);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (62,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Fiat+Panda/5.webp",12);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (63,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Fiat+Panda/6.webp",12);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (64,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sed%C3%A1n+DS+9/1.jpg",13);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (65,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sed%C3%A1n+DS+9/2.jpg",13);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (66,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sed%C3%A1n+DS+9/3.jpg",13);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (67,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sed%C3%A1n+DS+9/4.jpg",13);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (68,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sed%C3%A1n+DS+9/5.jpg",13);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (69,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sed%C3%A1n+DS+9/6.jpg",13);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (70,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Audi+RS+5+Coup%C3%A9/1.jpg",14);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (71,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Audi+RS+5+Coup%C3%A9/2.jpg",14);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (72,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Audi+RS+5+Coup%C3%A9/3.jpg",14);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (73,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Audi+RS+5+Coup%C3%A9/4.jpg",14);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (74,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Audi+RS+5+Coup%C3%A9/5.jpg",14);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (75,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Audi+RS+5+Coup%C3%A9/6.jpg",14);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (76,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sonic+RS/1.jpg",15);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (77,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sonic+RS/2.jpg",15);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (78,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sonic+RS/3.jpg",15);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (79,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sonic+RS/4.jpg",15);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (80,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sonic+RS/5.jpg",15);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (81,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Sonic+RS/6.jpg",15);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (82,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+e-up!/1.jpg",16);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (83,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+e-up!/2.jpg",16);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (84,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+e-up!/3.jpg",16);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (85,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+e-up!/4.jpg",16);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (86,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+e-up!/5.jpg",16);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (87,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Versa/1.jpg",17);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (88,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Versa/2.jpg",17);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (89,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Versa/3.jpg",17);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (90,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Versa/4.jpg",17);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (91,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Nissan+Versa/5.jpg",17);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (92,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/1.webp",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (93,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/2.jpg",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (94,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/3.jpg",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (95,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/4.jpg",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (96,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/5.jpg",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (97,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/6.jpg",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (98,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Chevrolet+Spark+Sed%C3%A1n/7.jpg",18);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (99,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Amarok/1.jpg",19);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (100,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Amarok/2.png",19);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (101,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Amarok/3.png",19);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (102,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Amarok/4.jpeg",19);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (103,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Amarok/5.jpeg",19);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (104,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Toyota+Hilux/1.jpg",20);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (105,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Toyota+Hilux/2.jpg",20);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (106,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Toyota+Hilux/3.jpg",20);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (107,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Toyota+Hilux/4.jpg",20);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (108,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Toyota+Hilux/5.jpg",20);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (109,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Toyota+Hilux/6.jpg",20);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (110,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Jeep+Compass/1.jpg",21);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (111,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Jeep+Compass/2.jpg",21);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (112,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Jeep+Compass/3.jpg",21);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (113,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Jeep+Compass/4.jpg",21);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (114,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Jeep+Compass/5.jpg",21);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (115,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Jeep+Compass/6.jpg",21);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (116,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Hyundai+Santa+Fe/1.jpg",22);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (117,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Hyundai+Santa+Fe/2.jpg",22);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (118,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Hyundai+Santa+Fe/3.jpg",22);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (119,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Hyundai+Santa+Fe/4.jpg",22);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (120,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Hyundai+Santa+Fe/5.jpg",22);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (121,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Hyundai+Santa+Fe/6.jpg",22);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (122,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+Serie+4+Coup%C3%A9/1.jpg",23);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (123,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+Serie+4+Coup%C3%A9/2.jpg",23);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (124,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+Serie+4+Coup%C3%A9/3.jpg",23);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (125,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+Serie+4+Coup%C3%A9/4.jpg",23);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (126,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+Serie+4+Coup%C3%A9/5.jpg",23);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (127,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+M4+Coup%C3%A9/1.jpg",24);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (128,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+M4+Coup%C3%A9/2.jpg",24);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (129,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+M4+Coup%C3%A9/3.jpg",24);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (130,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+M4+Coup%C3%A9/4.jpg",24);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (131,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+M4+Coup%C3%A9/5.jpg",24);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (132,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+BMW+M4+Coup%C3%A9/6.jpg",24);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (133,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Suran/2.jpg",1);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (134,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Suran/3.jpg",1);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (135,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Suran/4.jpg",1);
INSERT INTO digital_booking.imagen (id, url, id_imagen) VALUES (136,"https://grupo-2.s3.amazonaws.com/Im%C3%A1genes+productos/Galeria+Volkswagen+Suran/5.jpg",1);




INSERT INTO digital_booking.roles(id, nombre) VALUES(1,"USER");
INSERT INTO digital_booking.roles(id, nombre) VALUES(2,"ADMIN");

INSERT INTO digital_booking.usuario (id, id_rol, email, edad, active) VALUES (1, 1, "jajsdjjasdj",20, true);
INSERT INTO digital_booking.usuario (id, id_rol, email, password, edad, active,nombre,apellido) VALUES (2, 2, "admin@admin.com", "$2a$12$gKWurFbLUp9mxBDD4y1aUOlN9x96u3lCgXnK7hNUQD.H/kzHrgv/2", 20, true,"admin", "admin");
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (1, "2021-12-25", "2021-12-20", 1, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (2, "2021-12-25", "2021-12-20", 2, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (3, "2021-12-25", "2021-12-20", 3, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (4, "2021-12-25", "2021-12-20", 4, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (5, "2021-12-25", "2021-12-20", 5, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (6, "2021-12-25", "2021-12-20", 6, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (7, "2021-12-25", "2021-12-20", 7, 1);
INSERT INTO digital_booking.reserva (id, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES (8, "2021-12-25", "2021-12-20", 8, 1);





INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(1,4,2,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(2,5,2,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(3,4,2,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(4,3,2,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(5,3,3,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(6,4,3,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(7,3,3,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(8,3,3,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(9,1,4,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(10,2,4,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(11,1,4,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(12,3,4,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(13,4,5,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(14,5,5,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(15,4,5,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(16,3,5,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(17,4,6,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(18,3,6,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(19,3,6,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(20,3,6,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(21,3,7,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(22,4,7,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(23,4,7,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(24,4,7,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(25,4,1,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(26,5,1,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(55,4,1,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(27,3,1,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(28,5,8,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(29,5,8,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(30,5,8,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(31,5,8,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(32,5,9,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(33,3,9,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(34,5,10,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(35,4,10,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(36,3,11,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(37,4,11,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(38,4,11,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(39,4,12,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(40,4,13,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(41,5,13,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(42,5,13,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(43,5,14,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(44,4,15,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(45,4,15,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(46,4,16,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(47,4,17,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(48,3,18,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(49,3.5,19,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(50,4,20,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(51,4.25,21,null);

INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(52,5,22,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(53,5,23,null);
INSERT INTO digital_booking.puntuaciones(id, puntuacion, producto_id, usuario_id) VALUES(54,5,24,null);




INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (1, "fas fa-user-alt", "5 personas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (2, "fas fa-suitcase-rolling","2 valijas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (3, "fas fa-suitcase" ,"1 Equipaje de mano");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (4, "far fa-snowflake", "Aire acondicionado");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (5, "fab fa-adn" ,"Automático");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (6, "fas fa-gas-pump", "Combustión");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (7, "fas fa-paw" ,"Mascotas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (8, "fas fa-baby", "Asiento para bebés");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (9, "fas fa-user-alt" ,"4 personas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (10, "fas fa-suitcase-rolling", "1 valija");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (11, "fas fa-bolt" ,"Híbrido");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (12, "fas fa-lightbulb", "Faroles retrotraíbles");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (13, "fas fa-user-alt" ,"2 personas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (14, "fas fa-suitcase", "2 Equipaje de mano");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (15, "fas fa-bolt" ,"Eléctrico");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (16, "fas fa-user-alt", "6 personas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (17, "fas fa-suitcase-rolling", "3 valijas");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (18, "fas fa-level-up-alt", "Caja de 8 velocidades");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (19, "fas fa-mountain", "4 X 2");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (20, "fas fa-level-up-alt" ,"Caja de sexta");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (21, "fas fa-mountain" ,"4 X 4");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (22, "fas fa-suitcase" ,"3 Equipaje de mano");
INSERT INTO digital_booking.caracteristica (id, icono, nombre) VALUES (23, "fas fa-user-alt", "7 personas");

DELETE FROM digital_booking.integracion_de_caracteristicas;
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 1);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 7);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (9, 8);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 1);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (10, 8);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (11, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (11, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (11, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (11, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (11, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 10);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (12, 8);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (13, 13);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (13, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (13, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (13, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (13, 11);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (13, 12);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (14, 13);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (14, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (14, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (14, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (14, 12);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (15, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (15, 14);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (15, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (15, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (16, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (16, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (16, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (16, 15);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (16, 8);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (17, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (17, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (17, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (17, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (17, 10);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (18, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (18, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (18, 10);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (18, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (18, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (18, 8);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 16);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 14);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 17);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 18);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (19, 19);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 14);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 20);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (20, 21);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (21, 1);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (21, 22);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (21, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (21, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (21, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (21, 19);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (22, 23);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (22, 14);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (22, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (22, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (22, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (22, 21);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (23, 13);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (23, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (23, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (23, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (23, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (23, 12);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (24, 13);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (24, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (24, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (24, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (24, 15);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (24, 12);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (1, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (1, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (1, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (1, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (1, 7);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (2, 1);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (2, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (2, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (2, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (2, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (2, 7);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (3, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (3, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (3, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (3, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (3, 20);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (4, 1);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (4, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (4, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (4, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (4, 7);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (5, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (5, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (5, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (5, 7);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (5, 8);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (5, 19);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (6, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (6, 10);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (6, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (7, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (7, 10);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (7, 3);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (7, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (7, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 9);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 2);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 4);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 5);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 6);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 12);
INSERT INTO digital_booking.integracion_de_caracteristicas (producto_id, caracteristicas_id) VALUES (8, 20);














