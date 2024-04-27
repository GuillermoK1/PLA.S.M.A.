# Plataforma de Servicios Múltiples Adaptados.

## Mi ruta de aprendizaje autodidacta con la guía de ChatGPT-3.5.

Durante el desarrollo desde cero de esta aplicación aprendí a programar en NodeJS y Express. Aprendí también (tras mucha investigación, realizar muchas preguntas, mucho ensayo y error) a pensar en todos los ámbitos de una aplicación web.
Salí de mi zona de confort, tras haberme introducido en el mundo de la computación con Python decidí aprender ingeniería de software fullstack. El stack tecnológico usado en este proyecto son:
- HTML
- CSS
- NodeJS
- Express
- Passport
- MongoDB
- Javascript

## Aprendizaje colateral:
- Arquitectura de proyectos.
- Patrones y antipatrones.
- Códgio consistente.
- Ciberseguridad.
- UI/UX
- Modelación de datos.
- Base de datos no relacionales (MongoDB academy).

## Status del proyecto:
En la vida hay que saber cuando parar. Y aunque aprendí tanto con este proyecto personal y mi visión original era lanzar el proyecto a producción en algún punto, tuve la oportunidad de participar en un equipo de desarrolladores real y aprender de primera mano cómo se trabaja en este entorno nuevo para mí y qué cosas me conviene quitar de la idea original del proyecto. Pues tomé la decisión, aborté el proyecto PLA.S.M.A. y me propuse dividir el proyecto en versiones usando además nuevas tecnologías que aceleran el desarrollo. Así poder lanzar a producción una primera versión en menos tiempo e ir desarrollando poco a poco las siguientes versiones.

## Proyecto PLA.S.M.A.:
Consiste en conectar clientes con empresas que ofrecen servicios. Los servicios están peestablecidos en una lista y solamente pueden escogerse de ahí (para evitar el uso de la aplicación para actividades ilícitas).
El cliente escoge el servicio que necesita y la api hace la petición a la base de datos para suministrar una lista paginada de 3 empresas por página.
El cliente escoge la empresa que prefiere y solicita a esa empresa por medio de la app una cita de 1, 2, o 3 horas, y propone unas fechas para ello.
La empresa revisa la solicitud y responde con una confirmación de la cita.
El cliente hace un pago en la aplicación que será retenido hasta 24 horas después de realizar el servicio para el beneficio de ambas partes (evitar el fraude del lado de la empresa e impagos del lado del cliente).
La empresa presta el servicio, el cliente confirma el servicio y responde a la encuesta de satisfacción.
>[!NOTE]
>La plataforma hace seguimiento automático con un bot para procurar que ambas partes cumplen con el acuerdo.

La empresa recibe el pago y responde a la encuesta de satisfacción.
Cada usuario, sea empresa o cliente recibe una valoración de acuerdo con las encuestas respondidas, y además el algoritmo de la plataforma realiza una puntuación de RANGO basada en el cálculo de datos como la reputación del usuario (si cumple con lo acordado), su responsabilidad y su actividad en la plataforma. Este RANGO influye en el posicionamiento de los resultados de búsqueda y en el precio por su trabajo (calidad del servicio).
Las empresas también podrán rechazar clientes basándose en sus rangos o valoraciones.
