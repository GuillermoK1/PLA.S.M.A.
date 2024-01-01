Index
1. Concepto.
2. User story. (qué quieres hacer?)
3. -
4. Monetización.
5. Diseño de superficie del producto.
6. Tecnologías a usar.
7. Vínculos para las rutas.
8. Base de datos
9. Flujo y Algoritmos
10. Seguridad


1.Concepto:
La idea es tener una página web que sirva de plataforma para conectar a trabajadores autónomos con clientes. Siendo dicha plataforma la mediadora entre ambas partes, usando un bot para resolver cuestiones predeterminadas pero teniendo un servicio de atención al usuario de respaldo manejado por un humano.

Debe tener una estructura de clasificación tanto para los diferentes servicios como para el rango y la puntuación de los usuarios, además los usuarios pueden conseguir ‘medallas’ que les representen por su desempeño y subirlas de nivel. En la base de datos protegida debería haber la información necesaria pública como nombre, puntuación, precio, experiencia, y metadatos privados de los usuarios como reseñas, información de contacto, disponibilidad de los trabajadores, e información de facturación.

En la página de inicio se muestran 10 botones (los 10 servicios que se ofrecen: Limpieza, Mudanza, Fontanería, Electricidad, Montaje de muebles, Reparaciones básicas, Manipedias, Peluquería, Cuidado de personas, Cuidado de mascotas, Decoración, Acabados) y debajo un botón de ‘Ofrecer tus servicios’.

La siguiente página debería mostrar una lista de 3 en 3 tarjetas de trabajadores disponibles en orden según los criterios 1º Disponibilidad 2º Rango, 3º Valoración y 4º Precio. Con sus fotos de perfil o avatares si lo desean. También debería haber una seña que revele la disponibilidad de dicho trabajador (Inmediata, 1 - 2 días, 3 - 5 días, 1 semana, + de 2 semanas) usando un algoritmo en el backend que trabaje con su calendario personal.

Cada trabajador debería ser autónomo y responsable por sí mismo del pago de sus impuestos, y todos los usuarios se deben comprometer a dar un uso responsable y legítimo de la plataforma. Los clientes no podrán hacer un primer contacto con el trabajador sin ser mediante la plataforma; de este modo aseguramos que se lleve a cabo una transacción de un extremo al otro. El cliente podría preferir usar la plataforma como mediadora para tener la oportunidad de hacer reclamaciones y reembolsos, respaldando así la confianza en la plataforma. Y al trabajador le interesa que lo soliciten a través de la plataforma para aumentar su rango y acceder a un mayor precio por hora.
Si fuera el caso de haber que reembolsar un servicio, y la plataforma concluye que el cliente no tiene la razón, al cliente se le bajará la puntuación. Pero si de lo contrario, al cliente se le da la razón, entonces bajaría la puntuación del trabajador y si el valor del reembolso es alto también se le pedirá cuentas.

Los clientes deberán pagar el servicio por adelantado mediante tarjeta de crédito o recargar y contar con saldo positivo para hacer frente al pago del servicio, la plataforma retendrá el pago hasta confirmar que el servicio fue completado y el cliente está satisfecho.
Los clientes podrán suscribirse a servicios periódicos y reservar a trabajadores en la agenda de estos.
Un bot de la plataforma recordará a los clientes de sus próximas citas y avisará si se está agotando su saldo.

2. User story cliente.
Buscar servicios
Buscar trabajador
Registrarse como cliente
Actualizar o editar perfil
Eliminar cuenta
Solicitar servicio (agendar en calendario interactivo)
Pagar servicio o recargar saldo (confirmar transacción)
Posponer una cita
Anular una cita
Solicitar reembolso
Hacer reclamaciones
Acceder al historial de transacciones
Pedir ayuda al bot

2.1 User Story trabajador.
Registrarse como trabajador
Actualizar o editar perfil
Eliminar cuenta
Posponer una cita
Anular una cita
Hacer reclamaciones
Acceder al historial de transacciones, dejar reseñas.
Pedir ayuda al bot

3. -




4. Monetización.
La plataforma recibe capital únicamente en EUROS por parte de los clientes para que estos recarguen su saldo o hagan sus pagos puntuales. Tras haber finalizado el servicio transcurrirá un corto periodo de tiempo y se programará el pago para los trabajadores. Los pagos se efectuarán cada día 15 del mes (o siguiente día laborable).
La plataforma será gratis para usar, y obtendrá beneficios mediante ads.
La plataforma debe tener ciertas características reservadas para usuarios premium, por ejemplo: Poder mostrar un bio, Adquirir más citas por día, Acceso a reseñas.
Los trabajadores pueden acceder al uso de la plataforma de forma GRATUITA únicamente para su primera transacción.
De manera gratuita, los trabajadores solo pueden agendar 1 servicio al día máx 3 horas.
Los trabajadores no necesitan recargar saldo pero deben comprar pases para agendar más servicios con clientes.
Los trabajadores podrán comprar paquetes de pases a un precio más bajo.
La plataforma retendrá una comisión por cada transacción probablemente 1€  (PENDIENTE POR ESTIPULAR).

5. Diseño de superficie.
Quiero una paleta de colores que despierte sentimientos de autoestima, confianza, y seguridad.
El diseño tiene que ser sumamente intuitivo y sencillo, no quiero que ninguna ventana contenga demasiada información para procesar sino que el usuario pueda tomar decisiones sencillas y tenga pocas opciones a la vez.

6. Tecnologías a usar.
Para crear una página web2, necesitarás utilizar tecnologías tanto del lado del cliente como del lado del servidor. A continuación, te presento las tecnologías más utilizadas en cada ámbito:
Tecnologías del lado del cliente:
HTML: Es el lenguaje de marcado que se utiliza para crear la estructura de la página web. Es la base de cualquier sitio web y se utiliza para definir el contenido y la estructura de la página.
CSS: Es el lenguaje que se utiliza para dar estilo a la página web. Se utiliza para definir el diseño, los colores, las fuentes y otros aspectos visuales de la página.
JavaScript: Es un lenguaje de programación que se utiliza para hacer que las páginas web sean más interactivas. Se utiliza para crear efectos visuales, animaciones y otras características interactivas en la página.
Tecnologías del lado del servidor:
Node.js: Es un entorno de tiempo de ejecución de JavaScript que se utiliza para crear aplicaciones web escalables y de alta velocidad.
Express
Passport
MongoDB
7. Vínculos para las rutas.
 Página de inicio -  Buscar servicios:
Escoger una Tarjeta de servicio => Agregar el servicio al middleware y pasar a la siguiente página ‘Buscar trabajador’.
Página Buscar trabajador - Subtítulo h3 = servicio escogido: (La API responderá usando parámetros de rango, valor y disponibilidad precalculados. Dejará atrás a los trabajadores ocupados y de menor rango y valor.) 
Escoger una Tarjeta de trabajador => Agregar el trabajador al middleware y pasar a la siguiente página ‘Solicitar cita’.
Página Solicitar cita - Servicio + Trabajador en el carrito:
Buscar fecha en el calendario y solicitar horas de trabajo (3 horas máx). => Enviar solicitud a la plataforma ‘Enviar solicitud’.
Página Saldo - Ofrece las opciones de esperar a la confirmación del trabajador para proseguir con el pago puntual, o recargar saldo y cuando el trabajador otorgue la cita, se agenda la cita exitosamente y la plataforma envía un correo electrónico a cada parte con la confirmación de la cita.
Página Historial de transacciones - Devuelve al usuario la información de cada transacción que haya efectuado.
……


8. Base de datos. (Modelación de datos en curso)
En la base de datos tienen que coexistir las siguientes claves:
Metadatos de cada usuario cliente: (NO Relacional A)
 -OID-, Nombre, Apellidos, DNI, Código Postal, e-mail, Fecha de Nacimiento, contraseña.

Metadatos de cada usuario trabajador: (NO Relacional B)
 -OID-, Servicio que ofrece, Nombre, Apellidos, DNI, Dirección fiscal, email, fecha de nacimiento, Número de trabajador (interno), contraseña. Datos bancarios para realizar el pago por el servicio.

Otros datos de cada usuario: (Relacional C)

-OID- (para vincular la fila con una persona de la base de datos no relacional),

 Puntuación: cálculo de factores: Conteo de citas agendadas y Reseñas.

 Reputación: cálculo de factores: Conteo de citas pospuestas, Conteo de citas anuladas,
Horas de servicio.
Nombre de perfil

Rango : cálculo de factores: Puntuación y Reputación


Datos públicos de los trabajadores : ( Leídos de Relacional C)
 -OID-, Nombre de perfil, Rango, Puntuación, Disponibilidad, Precio.
9. Flujo y Algoritmo.
	-El usuario trabajador debe rellenar un formulario de 12 campos para formar parte del banco de trabajadores: servicio que ofrece, precio por hora, disponibilidad, primer nombre, primer apellido, NIF, correo electrónico, código postal, fecha de nacimiento, nombre de usuario, contraseña, iban (número de cuenta bancaria). La API se encarga de enviar y buscar los datos en la colección correspondiente al parámetro 'servicio' (existen 10 servicios disponibles para elegir y hay 10 colecciones para tener cada servicio separado).
	-El usuario cliente puede ingresar y ver los servicios y los trabajadores disponibles pero debe estar registrado para poder realizar una transacción. La visión del proyecto es que el cliente puede optar por recargar saldo en su cuenta y hacer uso de ese saldo para tantas transacciones le alcance, o pagar exactamente por cada transacción en el momento. La API debe manejar todos estos datos con mucha seguridad y evitar la corrupción de los datos cuando ésta es enviada a la base de datos. El cliente solicitará una cita al trabajador por medio de esta aplicación web y el trabajador debe confirmar que agendó esa cita, en ese momento se hace el cobro al cliente pero la API retendrá el pago al trabajador hasta 24 horas después de realizar el trabajo, por si el cliente no queda satisfecho y se solicita un reembolso o una investigación del caso. Cada transacción debe ser registrada con todos los datos necesarios para su futura auditoría. Por esto debemos contar con los datos personales esenciales del cliente (por ejemplo: nombre completo, fecha de nacimiento, dirección fiscal, NIF, correo electrónico, número de teléfono.)

- Algoritmo para calcular el 'rango' y la 'puntuación' del trabajador:
El cliente tiene la opción de enviar una valoración (posiblemente en forma de encuesta), pero no visible por el público para proteger a los trabajadores de posibles malos usos de esta opción. La valoración se usará como factor a la hora de mostrar públicamente una puntuación en la tarjeta de trabajador.
-transacciones positivas (completadas).
-transacciones negativas (pospuestas o anuladas)
-reputación (es el porcentaje resultado entre las transacciones positivas y negativas)
-puntuación (es el porcentaje resultado entre la cantidad de reseñas y la valoración, además se multiplica por la cantidad de transacciones positivas)
Entonces el rango se calcula multiplicando la 'puntuación' por la 'reputación' y el producto deberá ser representado con 3 posibles rangos, principiante, profesional, experto (tomar en cuenta que conlleva trabajo alcanzar un mayor rango).

Los clientes podrán elegir la tarjeta del trabajador que deseen tras ver la información disponible en ellas (nombre de usuario, rango, puntuación, disponibilidad, precio).
10. Seguridad
Establecer una expiración de 20 minutos para los tokens es una práctica de seguridad sólida, especialmente si crees que es suficiente tiempo para que los usuarios realicen las operaciones necesarias en tu aplicación. Limitar la duración de vida de los tokens ayuda a mitigar los riesgos en caso de que sean comprometidos.

Es importante recalcar que la seguridad es un aspecto de las aplicaciones web que debe ser evaluado y mejorado continuamente, especialmente a medida que tu aplicación crece y se expone a un mayor número de usuarios en entornos de producción. Aquí hay algunas consideraciones adicionales para el futuro:

1. **Monitoreo y Registro**: Implementa una buena estrategia de registro y monitoreo para detectar y responder a actividades sospechosas o inusuales en tiempo real.

2. **Pruebas de Seguridad**: Realiza pruebas de seguridad regularmente, como pruebas de penetración, para identificar y corregir vulnerabilidades.

3. **Retroalimentación de Usuarios**: Una vez que tu aplicación esté en uso por usuarios reales, su retroalimentación puede ser invaluable para identificar problemas de seguridad o usabilidad que no habías considerado.

4. **Actualizaciones y Mantenimiento**: Mantén tus dependencias actualizadas y revisa regularmente las mejores prácticas de seguridad y las vulnerabilidades conocidas que puedan afectar a tu stack tecnológico.

5. **Escalabilidad de Seguridad**: A medida que tu aplicación crece, considera implementar soluciones de seguridad más avanzadas y escalables, como sistemas de gestión de identidades, firewalls de aplicaciones web (WAF), etc.

Recuerda, la seguridad es un proceso continuo y evolutivo. Está bien empezar con un conjunto de medidas de seguridad y luego ajustarlas y mejorarlas a medida que tu aplicación y tu comprensión de las necesidades de seguridad evolucionan.




Autor: Guillermo José Kabbabe Román.
