# Definiendo el proyecto 'Vanilla Games'

## Escenario del proyecto

Vanilla Games S.L. es una empresa de desarrollo de minijuegos para navegadores web, creados con vanillaJS, es decir, desarrollados exclusivamente con Javascript como lenguaje de programación (sin frameworks).

En esta empresa trabajan 10 desarrolladores y, habitualmente, suelen tener a tres alumnos/as en prácticas, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en proponer a cada uno de los miembros del equipo el desarrollo de un minijuego que, al acabar, deberán compartir con el resto de sus compañeros. Estos, a su vez, deben comentar y valorar cada una de las propuestas. Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial, para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de google. Actualmente pretenden crear una aplicación web tipo intranet para llevar a cabo este propósito.

Como alumno en prácticas, tu trabajo consiste en crear una aplicación web que permitirá a los desarrolladores de Vanilla Games, publicar sus propuestas de minijuegos, de manera que el resto de compañeros podrá hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

## Requisitos del proyecto y casos de uso general

Los casos de uso son una técnica de modelado utilizada en el desarrollo de software para describir las interacciones entre un sistema y sus usuarios. En términos simples, los casos de uso describen cómo los usuarios interactúan con un sistema y qué resultados esperan obtener de él.

## Casos de uso general

Esta aplicación web debe permitir a un usuario registrarse (con su nombre, apellidos, email y contraseña) y posteriormente iniciar y cerrar sesión. Un usuario registrado debe poder ver un listado de proyectos publicados por los desarrolladores. También podrá editar su perfil y subir una imagen de tipo avatar.

Si el usuario registrado tiene el perfil de ‘desarrollador’ , además, debe poder publicar proyectos con información del tipo: nombre de proyecto, una descripción, una imagen representativa y dos enlaces, el del proyecto desplegado en un servidor de pruebas y el del repositorio del código correspondiente, el estado del proyecto, etc. También debe poder eliminar o editar sus proyectos.

Por otro lado, el perfil desarrollador debería poder realizar comentarios de cada uno de los proyectos publicados y añadir una valoración en forma de estrellas.

Finalmente, habrá un administrador que podrá adminstrar el perfil de cada uno de los usuarios registrados en la plataforma (editar, borrar, etc) así como modificar el rol de cada uno de estos. También tendrá control total sobre los comentarios y valoraciones.

## Fases de desarrollo

Necesitamos organizarnos un poco. Vamos a planificar como vamos a llevar a cabo las diferentes fases para cumplir con nuestros objetivos:

Definición del proyecto y requisitos básicos: En primer lugar debemos tener muy claro qué se espera de nuestra aplicación, por lo que anotaremos cada funcionalidad teniendo en cuanta los diferentes actores (roles de acceso). Esto es lo hemos hecho en el apartado anterior.
Definición de las versiones: Una vez conocemos los requisitos del proyecto, dividiremos el trabajo en diferentes versiones, de manera que todas ellas serán operativas, aunque cada una ampliando las funcionalidades.
Planificación del proyecto: Basandonos en la metodología Agile devidiremos todo el proceso en diferentes historias/tareas (para cada una de las versiones definidas) que: agruparemos, temporizaremos y representaremos mediante diagramas.
Diseño de la interficie: Basandonos en el diseño centrado en el usuario (DCU):
Realizaremos un Benchmarking (para copiarnos de la competencia)
Crearemos un modelo de usuarios
Diseñaremos los prototipos de bajo nivel(bocetos, wireframes)
Diseñaremos el mockup (prototipo de alto nivel) junto a la guía de estilos (usaremos la aplicación Figma)
Haremos pruebas de usabilidad y rediseñaremos los prototipos.
Programación del frontend (html/css/js):Maquetaremos los prototipos (html/css) y diseñaremos la lógica de validación de cliente
Programación del backend: Utilizaremos un backend como servicio (SUPABASE) para:
Crear las bases de datos
Diseñar consultas sql y funciones postgres
Programaremos un ORM en javascript para el mapping de la bd.
Integración de frontend y backend en la aplicación:
Programaremos la SPA a partir de los prototipos
Programaremos la lógica de acceso a la bd empleando el ORM
Programaremos el resto de funcionalidades (sesiones y roles de acceso, etc)
Analisis usabilidad II: Haremos pruebas de usabilidad (test de usuarios) y solucionaremos los posibles conflictos detectados.
Testing y despliegue en producción:
Diseñaremos un sistema de testing para crear tests unitarios
Configuraremos un entorno DevOps para trabajar con Integración continua y despliegue continuo (CI/CD)
Desplegaremos en producción cada una de las versiones.

# Stack tecnológico

![Alt text](img/stack.png)

# Metodología Agile. Conceptos

## ¿Qué son las metodología Agile?

Agile es un enfoque de desarrollo de proyectos que se basa en la flexibilidad, la colaboración y la entrega incremental de software.

Este enfoque se utiliza para planificar y gestionar proyectos de manera que puedan adaptarse a los cambios en los requisitos del cliente y a las condiciones cambiantes del mercado.

## Terminología

Os explico la terminología 'Agile' y cómo se usa en la planificación del desarrollo de proyectos en sus diferentes versiones:

User Stories (Historias de Usuario): Las historias de usuario son descripciones breves y centradas en el usuario de las funcionalidades o características que se deben desarrollar. Están escritas en lenguaje natural y se utilizan para representar los requisitos desde la perspectiva del usuario.

Product Backlog (Lista de Producto): Es una lista priorizada de todas las historias de usuario y características que se desean incluir en el producto. El backlog se actualiza y reordena de forma continua a medida que se obtiene más información o cambian las prioridades.

Sprints: Un sprint es un período de tiempo fijo y corto (generalmente de 2 a 4 semanas) durante el cual se trabaja en un conjunto específico de historias de usuario del backlog. Los sprints permiten una entrega incremental y regular de funcionalidades.

Sprint Planning (Planificación de Sprint): En la planificación de sprint, el equipo selecciona las historias de usuario del backlog que se abordarán en el próximo sprint. Esto implica estimar la complejidad y el esfuerzo necesario para cada historia y comprometerse con un conjunto de trabajo para el sprint.

Daily Standup (Reunión Diaria): También conocida como la reunión de scrum, es una breve reunión diaria en la que el equipo se pone al día sobre lo que ha hecho, lo que planea hacer y si hay obstáculos en su camino. Esto fomenta la comunicación y la colaboración.

Sprint Review (Revisión de Sprint): Al final de cada sprint, se realiza una revisión para demostrar las funcionalidades desarrolladas y obtener retroalimentación del cliente o del equipo de stakeholders. Esto ayuda a ajustar las prioridades del backlog.

Sprint Retrospective (Retrospectiva de Sprint): Después de la revisión de sprint, el equipo realiza una retrospectiva para analizar lo que funcionó bien y lo que se puede mejorar en el proceso. Esto facilita la adaptación continua y la mejora.

Burndown Chart (Gráfico de Burn-Down): Es una representación visual del trabajo restante en el sprint. Muestra cómo el equipo está progresando hacia la finalización de las tareas planificadas para el sprint.

Velocity (Velocidad): La velocidad es una medida de la cantidad de trabajo que un equipo puede completar en un sprint. Se utiliza para estimar cuántas historias de usuario se pueden abordar en futuros sprints.

En cuanto a las diferentes versiones de Agile, existen varios marcos y metodologías, como Scrum, Kanban, Lean, eXtreme Programming (XP) y más. Cada uno tiene sus propias prácticas y enfoques, pero todos comparten el valor fundamental de la flexibilidad y la adaptación continua en el desarrollo de software.

La elección de la metodología Agile adecuada depende de las necesidades específicas del proyecto y del equipo de desarrollo. Cada uno de estos enfoques se adapta a diferentes contextos y preferencias organizativas.

## SCRUM

![Alt text](img/scrum.png)

# Requesitos y diagrama de casos de uso

En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

## Casos de uso para la V1.0 - Definición básica

Registrar usuario: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
Recuperar contraseña: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
Iniciar sesión: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
Editar perfil: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
Ver proyectos: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
Publicar proyecto: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
Editar proyecto: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
Eliminar proyecto: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
Ver/Editar usuarios: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
Eliminar usuario: Un administrador puede eliminar cualquier usuario registrado en la plataforma.

# Diagrama de casos de uso

## Diagrma de casos de uso para la versión 1.0

![Alt text](img/casosuso.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión ahora es planificar el trabajo que se nos viene encima...

# PLANIFICACIÓN DEL PROYECTO

## Planificación del proyecto

¡Estamos listos y hemos comenzado a desarrollar la versión 1.0 de nuestro proyecto!

En el apartado anterior hemos definido qué funcionalidades debe tener. Además, hemos analizado las diferentes arquitecturas y tecnologías y hemos optado por utilizar una CSR (Client Side Rendering basada en una SPA programada en Javascript y conectada a Supabase como servicio backend).

Por lo tanto estamos en condiciones de definir cada una de las tareas que necesitaremos realizar para llevar a cabo esta primera versión del proyecto.

Para poder planificar el trabajo, vamos a crear el 'backlog de proyecto', es decir, vamos a desglosar el trabajo en historias para, a continuación, crear el backlog de sprint (donde agruparemos las historias por entregas). Finalmente vamos a planificar su temporización, es decir, vamos a asignar un tiempo determinado a cada historia.

## SPRINT 0: Definición del proyecto

Historia: Requisitos, casos de uso y diagrama de casos de uso Como desarrollador, quiero definir de manera genérica las especificaciones de la aplicación.

Historia: Versiones y planificación Como desarrollador, quiero agrupar las especificaciones en versiones, definir las tareas necesarias y realizar la planificación de todo el proceso de desarrollo del proyecto.

Historia: Casos de uso especificos y diagramas de flujo Como desarrollador quiero definir las especificaciones y casos de uso para la versión 1.0.

(Esta historia ya hemos comenzado a trabajarla en apartados anteriores. No obstante, es importante que quede constancia de ello para poder hacer una valoración del tiempo total invertido.)

## SPRINT 1: Diseño de la interficie

Historia: Bocetos: Como diseñador quiero dibujar los bocetos de todas las posibles pantallas del proyecto y testear su funcionamiento.
Historia: Wireframes, Mockup y guía de estilos: Como diseñador quiero dibujar los mockups y crear la guía de estilos a partir de los colores, tipografías, etc seleccionadas.

## SPRINT 2: Prototipos

Historia: Entorno de desarrollo: Como diseñador/programador quiero instalar y configurar las herramientas necesarias para programar la aplicación, trabajar con repositorios y crear un entorno integración continua y despliegue continuo.
Historia: Prototipos html: Como maquetador web quiero crear las páginas html del proyecto a partir de los wireframes aplicando la guía de estilos y utilizando Bootstrap 5.
Historia: Validaciones de formularios: Como programador quiero definir e implementar las validaciones de los formularios del proyecto.

## Sprint 3: Implementación de la SPA

Historia: Entorno de desarrollo basado en NodeJS: Como programador quiero instalar y configurar todas las herramientas necesarias (NodeJS, Vite, etc.) para el desarrollo de una app tipo SPA basada en Javascript
Historia: Creación de proyecto basado en SPA y organización de archivos para las vistas basadas en módulos js: Como programador quiero configurar el sistema de carpetas para las vistas y crear los archivos a partir de componentes html basados en los prototipos.
Historia: Creación de componentes: Como programador quiero crear los componentes para el encabezado, el enrutado de las páginas y los menús.
Historia: Diseño del aspecto de las vistas: Como usuario quiero poder navegar por todas las vistas de la aplicación (independientemente del del rol).
Historia: Implementación de la lógica para la validación de los formularios: Como usuario quiero recibir feedback de validación en las vistas con formularios.
Historia: Lógica para la autenticación de usuarios: Como usuario registrado quiero poder recordar los datos de sesión al loguearme (Uso de localStorage)
Historia: Actualización de componentes header y menús en función del rol de usuario logueado: Como usuario logueado quiero poder navegar por las vistas de la aplicación. (Podrán verse solo las opciones que corresponden a mi rol).
Historia: Diseño de las vistas a partir de los datos de un archivo JSON: Como programador quiero simular el registro, login y visualización de las tablas de usuarios y proyectos a partir de datos ficticios obtenidos de una archivo json de prueba.
Historia: Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.): Como administrador quiero poder gestionar los usuarios y proyectos (CRUD)

## Sprint 4: Backend

Historia: Diseño de la base de datos: Como programador quiero diseñar la base de datos en base a diagrama UML (diagrama entidad-relación)

Historia: Implementación de las tablas y funciones en supabase: Como programador quiero implementar las bases de datos en Supabase, diseñar las consultas e implementar las funciones postgree multitabla

Historia: API javascript de Supabase: Como programador quiero probar las apis de javascript para el acceso a la base de datos

Historia: Implementación de un ORM para mapping de la base de datos: Como programador quiero diseñar el diagrama de clases e implementarlo en javascript para tener un mapping de la bd.

## Sprint 5: Integración del frontend y el backend

Historia: Login y registro: Como usuario quiero poder registrarme e iniciar sesión.

Historia: Gestión de sesiones: Como usuario registrado quiero ver la web en base al rol que tengo asignado.

Historia: Editar perfil Como usuario registrado quiero poder ver y modificar mi perfil.

Historia: Gestión de Proyectos (Vista proyectos, detalle proyecto, etc): Como usuario registrado 'desarrollador' quiero poder ver los proyectos, ver mis proyectos, crear proyectos, ver detalle de los proyectos y editar y borrar mis proyectos.

Historia: Gestión de usuarios: Como usuario registrado 'administrador' quiero poder ver, editar y borrar los usuarios del sistema.

## Sprint 6: Revisión y despliegue en producción de la versión 1.0

Historia: Test de usuarios Como diseñador quiero realizar tests de usuarios a un grupo de usuarios focales.

Historia: Revisión de la aplicación Como programador quiero revisar y corregir los posibles problemas detectados en el test de usuarios.

Historia: Despliegue en producción Como programador quiero despleguar la aplicación en producción.

Ahora que tenemos las historias definidas es el momento de planificar el trabajo. Para ello necesitamos una herramienta que nos permita gestionar y temporizar cada una de las tareas. Nosotros utilizaremos GitHub Projects

# Documentación en repositorio

Ya tenemos nuestro proyecto planificado en un primer nivel.

Las tres primeras versiones hacen referencia a definición de los requisitos, casos de uso y versiones así como a la planificación.

Vamos a dar un paso atrás para recuperar la documentación generada en estas historias y almacenarla en el repositorio.

Para ello, vamos a comenzar creando una nueva rama en nuestro repositorio:

![Alt text](img/documetnacion.png)

Ahora abrimos el repositorio con VSCode para trabajar de manera más cómoda. Para ello:

Abrimos una ventana de VSCode
Hacemos click en clonar repositorio y copiamos en la ventana superior la url del repositorio de 'VanillaGames' y hacemos click en 'Clonar repositorio'
Indicamos donde queremos que aparezca la carpeta de nuestro proyecto (en mi caso en el escritorio)
Observa como podemos ver en la columna izquierda la raiz del proyecto con el archivo README.md.

![Alt text](img/documetnacion2.png)

Si te fijas, podrás ver en la parte inferior izquierda, el nombre de la rama actual ('main'). Haz click sobre el nombre de la rama y selecciona la rama 'Documentación' que acabamos de crear.

## Documentando el proyecto en el repositori

Vamos a comenzar a subir archivos a nuestro repositorio. En nuestro caso utilizaremos archivos con extensión md para poder usar Markup. De esta manera podremos visualizar toda la información desde el mismo GitHub.

Asegurate que estás en la rama 'Documentación'
Crea un archivo con nombre DOCUMENTACION.md
Copia la documentación que hemos generado hasta ahora (la encontrarás en el apartado 'Definiendo Vanilla Games' )

![Alt text](img/documetnacion3.png)

Ahora, para subir los cambios en el repositorio, solo tienes que hacer click en el tercer icono de vscode (verás que tiene un 1 indicando que hay cambios en un archivo) y añadir un mensaje para el commit.

![Alt text](img/documetnacion4.png)

Después de hacer el commit te preguntará si quieres hacer 'push'. Haz click en el bóton para hacerlo.

Si vas ahora a GitHub y seleccionas la rama podrás ver los cambios.

![Alt text](img/documetnacion5.png)

Abre los Issues del repositorio y podrás ver en el primer Issue con #1 como aparece información referente a este último push

![Alt text](img/documetnacion6.png)

![Alt text](img/documetnacion8.png)

# Casos de uso específicos y diagramas de flujo

En el primer apartado 'Requisitos y diagrama de casos de uso' para esta versión 1.0, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un diagrama de casos de uso.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

## Casos de uso específicos

## 1. Registrar usuario

Actores: Usuario no registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

El usuario navega a la página de registro.
El usuario introduce su nombre, apellidos, email y contraseña.
El sistema valida que los campos estén completos y que el email no esté registrado previamente.
El sistema crea un nuevo usuario con los datos proporcionados.
El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.
Flujos alternativos:

3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

## 2. Recuperar contraseña

Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

El usuario navega a la página de registro.
El usuario selecciona la opción 'Recuperar contraseña'
El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.
Flujos alternativos:

3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.

## 3. Iniciar sesión

Actores: Usuario registrado.

Precondiciones: El usuario no ha iniciado sesión.

Flujo básico:

El usuario navega a la página de inicio de sesión.
El usuario introduce su email y contraseña.
El sistema valida las credenciales y crea una sesión para el usuario.
El sistema redirige al usuario a la página principal de la aplicación.
Flujos alternativos:

3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

## 4. Cerrar sesión

Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

El usuario hace clic en el botón de "cerrar sesión".
El sistema cierra la sesión del usuario.
El sistema redirige al usuario a la página de inicio.

## 4. Ver/Editar perfil

Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

El usuario navega a la página de edición de perfil.
El usuario edita su nombre, apellidos y contraseña.
El sistema valida los campos y actualiza el perfil del usuario.
El sistema muestra un mensaje de confirmación.
Flujos alternativos:

3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

## 5. Ver proyectos

Actores: Usuario registrado.

Precondiciones: El usuario ha iniciado sesión.

Flujo básico:

El usuario navega a la página de proyectos.
El sistema muestra una lista de proyectos publicados por desarrolladores.
El usuario puede hacer clic en un proyecto para ver más detalles.
El usuario puede mostrar/filtrar los proyectos a partir de un buscador

## 6. Publicar proyecto

Actores: Usuario registrado con perfil de desarrollador.

Precondiciones: El usuario ha iniciado sesión y su perfil es de desarrollador.

Flujo básico:

El usuario navega a la página de publicación de proyecto.
El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
El sistema valida los campos y crea un nuevo proyecto.
El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.
Flujos alternativos:

2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
El sistema descarta la información ingresada en el formulario.
El sistema muestra un mensaje de confirmación al desarrollador.

## 7. Editar proyecto:

Actor principal: Desarrollador

Objetivo: Editar la información de un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

El usuario selecciona la opción de "Editar proyecto".
El sistema muestra la lista de proyectos previamente creados por el usuario.
El usuario selecciona el proyecto que desea editar.
El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

## 8. Eliminar proyecto:

Actor principal: Desarrollador

Objetivo: Eliminar un proyecto previamente creado.

Precondiciones: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

Flujo principal:

El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
El usuario confirma que desea eliminar el proyecto.
El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
El sistema actualiza la información de proyectos.

## 9. Ver/Editar usuario:

Actor principal: Usuario administrador

Objetivo: Editar la información de los usuarios registrados.

Precondiciones: El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

Flujo principal:

El usuario selecciona la opción de "Ver usuarios".
El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

## 9. Eliminar usuario:

Actor principal: Usuario administrador

Objetivo: Eliminar usuario del sistema.

Precondiciones: El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

Flujo principal:

El usuario selecciona la opción de "Ver usuarios".
El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
El sistema informa de que se eliminarán todos sus registros.
El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

# Errores

Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

Error de conexión: El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

Error de validación: Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".

Error de autenticación: Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

Error de autorización: Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.

Error de servidor: En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que 
se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

# Hist3a - Diseño de la interfaz. Bocetos

Una vez tenemos claro las funcionalidades que debe realizar nuestra aplicación, comenzamos con el diseño de la interfaz.

Este proceso incluye diseñar los bocetos, los wireframes y los mockups ,para acabar creando los prototipos con html.

Sin duda, el primer paso, debe ser dibujar los bocetos, así que, busca un lápiz, una goma de borrar y un puñado de papel, ¡y manos a la obra!

## Home y menús usuarios

![Alt text](img/home.jpg)

Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).

En el header vamos a alojar una barra superior fija con: el logo y nombre de la web (que hará las veces de link a la página principal), un menú central genérico (para acceder a páginas públicas), un menú central específico (que será diferente en función del rol de usuario logueado), y un icono (avatar) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el menú de usuario (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).
El cuerpo (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.
El header será meramente informativo.

## Registro de un usuario

![Alt text](img/registro.jpg)

## Iniciar sesión

![Alt text](img/inicio.jpg)

## Editar mi perfil

![Alt text](img/edicionperfil.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, añadir una imagen de avatar. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan subirse archivos (imágenes) al servidor.

## Listado de todos los proyectos

![Alt text](img/listado.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

## Listado de Mis proyectos

![Alt text](img/misproyectos.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior.

## Detalle de un proyecto

![Alt text](img/detalleproyecto.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

##  Nuevo proyecto / Editar un proyecto

![Alt text](img/nuevo-editar.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto ENVIAR, pero si estamos editándolo aparecerá el texto ACTUALIZAR. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

## Panel administración de proyectos

![Alt text](img/panel.jpg)

Si tienes el rol 'administrador' aparecerá el item 'Panel administración' en el menú superior específico. Este item nos permite cargar la vista 'Panel administración de proyectos'. Desde esta vista también podemos acceder al 'Panel administración de usuarios'.

Esta vista permite editar o borrar cualquier proyecto haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista 'Editar proyecto'

## Panel administración de usuarios

![Alt text](img/panel2.jpg)

Esta vista permite editar los datos de los usuarios. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos aparecen sobre 'inputs', de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el 'estado' y el 'rol' del usuario) excepto el email.

# Hist3b - Test de usuarios inicial

## Primer Test de Usabilidad

Tal y como hemos comentado en el apartado 'Diseño centrado en el usuario', una de las premisas de esta metodología consiste en realizar evaluaciones constantes para detectar los posibles problemas de usabilidad cuanto antes mejor. Por lo que una buena idea es realizar un primer test de usabilidad.

Por el momento os adelanto que la técnica más utilizada par evaluar la usabilidad son los 'tests de usuario'.

Estos consisten en crear una bateria de acciones que el usuario debe realizar, para detectar si existe algún problema en la interación con la aplicación. A continuación vamos pidiendo a un usuario focal (una persona que esté dentro del target de usuarios a quien va dirigida la app) que realice cada tarea, mostrandole los bocetos que aparecerán en cada interacción. Por ejemplo, si hace clic sobre el item de menú 'login' le mostraremos el boceto de la página 'login'.

Para este primer test hemos preparado las siguientes acciones:

Suponiendo que eres un usuario no registrado:

Accede a la información general 'A cerca de' de esta web.
Regístrate.
Logueate.
Modifica tu perfil añadiendo una imagen de avatar.
Busca un proyecto llamado 'Tetris'.
Accede al detalle de este proyecto.
Cierra sesión.
Suponiendo que eres un usuario con rol 'Desarrollador':

Crea un proyecto nuevo.
Accede a la lista de tus proyectos.
Muestra el detalle de tu nuevo proyecto.
Edita tu proyecto cambiando la descripción.
Borra tu proyecto.
Suponiendo que eres un usuario con rol 'Administrador':

Muestra la lista de proyectos.
Borra un proyecto.
Modifica el nombre de un proyecto.
Muestra la listra de todos los usuarios registrados.
Canvia el rol de uno de ellos.
Modifica la imagen de su avatar.

## Conclusiones y modificaciones

De este primer test de usuario se desprenden las siguientes conclusiones:

La vista de proyectos en forma de tabla no es muy atractiva.
El usuario ha tenido dificultades a la hora de intentar modificar la imagen avatar de un usuario.
Para mejorar estos pequeños problemas de usabilidad vamos a tomar las siguientes acciones:

En la vista de proyectos vamos crear un par de botones para poder alternar entre ver los proyectos en forma de tabla o en forma de tarjetas.
En la vista de administración de usuarios, añadir un pequeño icono (un lápiz) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.
Estos serían los bocetos actualizados:

## Vista de proyectos

Poner la imagen del los nuevos bocetos

## Vista del Panel de administraición de usuarios

Poner la imagen del los nuevos bocetos

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: El diseño de los wireframes.

# Hist4 - Wireframe, mockup y guía de estilos

En el apartado anterior hemos diseñado y testeado los bocetos para la versión 1.0 de nuestro proyecto.

El siguiente paso, si nos basamos en el DCU (Diseño centrado en el usuario), sería diseñar los wireframes y, una vez tenemos los wireframes, los mockups junto a la guía de estilos.

Un proyecto de mayor envergadura requeriría de un equipo de trabajo con más de un perfil. La tarea de diseñar la interficie corresponde, por un lado, al arquitecto de la información y por otro, a un diseñador gráfico.

## Y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guía de estilos?

En nuestro caso, como el proyecto es muy básico, no nos vamos a centrar en aquellas tareas que corresponderían a un arquitecto de la información ni a un diseñador gráfico.

El mapa web de nuestra aplicación se limita a dar acceso a los proyectos y la administración de los usuarios. Sería tan sencillo com este:

En cuanto al diseño gráfico, aunque es una misión emocionante, nos vamos a limitar a trabajar con un tema de bootstrap utilizando Bootswatch, respetando, a priori, su paleta de colores y modificando, solo en algunos casos, algunos detalles como la fuente para los títulos.

![Alt text](img/wireframe.png)

# Hist5 - Entorno de desarrollo

## Comenzamos el SPRINT 2 - PROTOTIPOS

Comenzamos el sprint 2 que incluye tres historias: La configuración del entorno de desarrollo, la maquetación de los bocetos y la implementación de la validación de los formularios.

![Alt text](img/entorno.png)

“Dame seis horas para cortar un árbol y pasaré las primeras cuatro afilando el hacha.” – Abraham Lincoln

Si queremos ser eficientes en la creación de aplicaciones web, lo mejor es empezar por configurar bien nuestro entorno de desarrollo. Para ello vamos a instalar/configurar las siguientes herramientas:

Un buen software para escribir nuestro código. En nuestro caso usaremmos el programa VSCode de Microsoft.
Instalación del software para el control de versiónes. Nosotros instalaremos GIT.
Una aplicación web para sincronizar nuestro repositorio en la nube. En nuestro caso será GitHub.

# 1. VSCode

Sin duda, en le momento de escribir esta documentación, el rey de los IDs es, sin duda, Visual Studio Code (VSCode).

![Alt text](img/visual.png)

Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondré información ampliada ya que es un tema muy trillado en internet:

## 1.1. Descarga e instala VSCode

Puedes encontrar la versión oficial de vscode aquí.

## 1.2. Elige el tema que más te guste

Puedes tunear tu VSCode instalando diferentes temas. Para ello:

Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar.
Haz clic en instalar extensión.
Desde el icono de configuración de vscode (la tuerquecita de abajo a la izquierda) selecciona 'Temas > Tema de color'
Selecciona el tema que has instalado y... ¡ya lo tienes!

## 1.3. Instala un tema de iconos, por ejemplo VSCode Icons o Material Icon

Para instalar los iconos el proceso es el mismo:

Desde el buscador de extensiones escribe el nombre del tema de iconos
En configuración, selecciona 'Tema > Tema de icono de archivo' y busca el tema instalado.
Ahora verás que en la columna de la izquierda, cada archivo tiene un icono diferente en función de su extensión: html, css, etc.

## 1.4. Extensiones

Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo.

Prettier
Una de las extensiones que te recomiendo sí o sí es 'Prettier'. Esta extensión se va a encargar de formatear tu código HTML y CSS port tí, respetando las identaciones. El proceso para instalar esta extensión es muy simple, solo tienes que buscar la extensión en el buscador y darle a instalar.

Live Server
Otra extensión imprescindible para nosotros es Live Server. Mediante esta extensión podremos tener un servidor virtual que mostrará el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se irá actualizando conforme vamos modificando el código.

Existen infinidad de extensiones para VSCode Aquí puedes ver un ejemplo de mi entorno. Utilizo el tema Night Owl y los iconos de VSCode Icons. Fijate que el código html está formateado con Prettier

![Alt text](img/live.png)

De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. Más adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudarán a programar de forma más eficiente.

# 2. Control de versiones - Git

Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qué es Git, pero deja que te refresque algunas ideas importantes:

Vamos a instalar (si aun no está instalado) Git. Para ello:

Descarga su última versión de la web oficial: Download Git.

Instala en tu ordenador el software.

Configura git para tu usuario:

Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:

  $ git config --global user.name "John Doe"
  $ git config --global user.email johndoe@example.com  

Sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema

# 3. Repositorio en linea - Github

Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube.

En primer lugar vamos a acceder github.com
Crea una cuenta e inicia sesión.
Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.

# Configurando entorno y subiendo página de pruebas

Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para después crear una página web, guardar una versión en git, subirla a github y publicarla en github pages. Vamos a por ello:

Instala VSCode si no la has hecho aún.

Configúralo con el tema que más te guste, los iconos que decidas e instala las extensiones live server y prettier.

Crea una carpeta en tu ordenador con nombre pruebas

Abre VSCode y arrastra la carpeta dentro de la ventana central.

Crea un archivo con nombre index.html (algo básico, con un h1 y poco más).

Muestra el resultado en el navegador utilizando live server.

Configura prettier para que al guardar con ctrl + S se aplique formateado de tu código. Pruebalo.

Instala Git si no lo has hecho aún.

Configura tu usuario o confirma que ya está configurado.

Haz clic en el icono de 'Control de fuente' de tu vscode o pulsa ctrl + Mayus + G

Aparecerá un mensaje que te indica que no tienes repositorio creado, y te dará la opción de crearlo desde aquí. Hazlo

![Alt text](img/visual2.png)

![Alt text](img/visual3.png)

Escribe un mensaje de inicio de repositorio (por ejemplo 'primer commit de git') y dale a confirmar.

Ahora te pedirá si quieres publicar la rama ('Branch'). Dile que sí. Al hacer clic te preguntará qué nombre quieres para el repositorio y si quieres que sea privado o público. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea público.

Si es la primera vez que conectas tu VSCode con github te pedirá que lo sincronices. Utiliza la opción de confirmar a través de VSCode.

Una vez publicado tu archivo en github podrás ver, en tu página de github (por ejemplo carrebola.github.com), algo así:

![Alt text](img/git.png)

Vamos a documentar de forma básica nuestro proyecto prueba. Para ello vamos ahora a crear un archivo readme.md para que github muestre información del proyecto publicado en su pantalla inicial:
Crea un archivo con nombre readme.md en la raiz de la carpeta del proyecto.
Escribe dentro un texto descriptivo del proyecto, como por ejemplo:
Configurando nuestro entorno de desarrollo

Instalación de VSCode
Configurarción de git y github
Pruebas con proyecto


Si abrimos ahora github podemos ver como se muestra esta información en la portada del repositorio de github.

![Alt text](img/gitvisual.png)

Para terminar vamos a subir nuestro proyecto a github pages. Para ello:
Haz clic en Settings (el icono con forma de engranaje de la parte superior)
Entra en Pages (opción que encontrarás en el menú lateral izquierdo)
Donde pone Branch selecciona la rama main y haz clic en Save.
Si todo ha ido bien, la página se está publicando... Espera un minuto y refresca la página con F5
Ahora puedes ver la url donde se ha publicado tu página. Haz clic en el enlace o en el botón Visit site y podrás ver la web publicada.

![Alt text](img/prueba.png)

Y hasta aquí la configuración de nuestro entorno de desarrollo, al menos la versión básica. Más adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya estamos preparados para crear los prototipos en html y css de la primera versión de nuestro proyecto.

# ¡¡¡ Comienza el juego !!!

Ahora que tenemos el hacha afilado, es el momento de comenzar a escribir el primer código de nuestro proyecto. Pero antes vamos a crear un proyecto nuevo en VSCode, a continuación crearemos un repositorio y lo vincularemos con github. Después crearemos una rama exclusiva para el diseño de los prototipos en html/css. Y ya estaremos listos para comenzar a picar código. Vamos a ello:

## Creando la rama principal

Crea en tu carpeta de proyectos una carpeta con nombre vanillagames10

Abre VSCode y arrástrala a la parte central de tu IDE

Crea un repositorio para el proyecto.

Crea el primer commit con el mensaje 'Commit principal'

Publica la rama con el mensaje 'Rama principal'

Publica el repositorio como privado

Ahora tienes un proyecto con una única rama, cuyo nombre por defecto es main. Vamos a crear un archivo readme.md para esta rama. Escribe en él el título 'Vanilla Games' junto a un párrafo con la descripción del proyecto: 'Vanilla Games es el nombre que recibe el proyecto que vamos a desarrollar en esta documentación. Es un proyecto sencillo, en las versiones iniciales, que se irá complicando a medida que vayamos trabajando en él.'.

Crea un segundo commit con el texto 'Creamos archivo readme.md para rama principal'. A continuación sincroniza los cambios con github.

Abre ahora la página de github y comprueba que:

El proyecto se ha creado y subido con éxito en la rama main.
Se muestra la información del archivo readme.md en la página principal.
Se muestra el mensaje del commit que has hecho.

![Alt text](img/comprobacion.png)

## Creando la rama prototipos

Vamos a crear una rama exclusiva para el diseño de los prototipos y a subirla a github. Sigue los siguientes pasos:

Crea una rama nueva con nombre prototipos. Para ello haz clic en el nombre de la rama actual 'main' que verás en la parta inferior izquierda de VSCode.

Selecciona Crear rama...

Vamos a ponerle el nombre 'prototipos'

Fijate que ahora en la parte inferior izquierda aparece el nombre de la rama actual en la que estás trabajando.

Crea una carpeta en la raiz con nombre prototipos.

Ahora vamos a crear el archivo home.html (de momento pon un h1 con el título y poco más)

![Alt text](img/crear.png)

Y hacemos un commit con el texto 'Prueba prototipo home'. Te pedirá si quieres publicar la rama, dile que sí y haz push (sincronziar con github).

Fíjate que ahora en github tienes las dos ramas, la rama mainy la rama prototipos. En la rama main solo tienes el archivo readme.md pero en la rama prototipos ahora ya tienes la carpeta prototiposcon el archivo home.html. Es decir, ahora tienes un repositorio de tu proyecto pero con diferentes ramas que, por el momento, serán completamente independientes.

![Alt text](img/mira.png)

Ya para acabar, puede ser interesante crear un archivo readme.md dentro de la carpeta prototipos. Hazlo y sube los cambios a github

![Alt text](img/crea.png)

# Comenzamos a maquetar con Bootstrap

## Frameworks como marco de trabajo en Javascript

No nos engañemos. En la mayoría de empresas de desarrollo web hacen trampas. Son pocas las que crean aplicaciones con html, css y javascript puro. La mayoría utilizar librerías que nos facilitan el trabajo. Es más, la casi todos os desarrolladores trabajan con lo que conocemos como frameworks.

Algunos ejemplos de frameworks frontend populares incluyen:

React,
Angular,
Vue.js y
Svelte.
Estos frameworks pueden ahorrar tiempo a los desarrolladores al proporcionar una base sólida sobre la cual construir, evitando la necesidad de comenzar desde cero y permitiendo enfocarse en la lógica y la experiencia del usuario en lugar de en detalles técnicos repetitivos.

## Frameworks para la maquetación html/css

Ahora bien, para la maquetación sí que vamos a utilizar un poco de ayuda 😅.

Los frameworks de diseño o bibliotecas proporcionan estilos predefinidos y componentes reutilizables para ayudarte a construir interfaces de usuario más rápidamente.

Los más populares en son:

Bootstrap
Tailwind CSS

## Bootstrap:

Bootstrap es uno de los frameworks de diseño más populares. Proporciona una amplia gama de componentes y estilos predefinidos basados en HTML, CSS y JavaScript. Es altamente personalizable y es ideal para crear sitios web responsivos y modernos.

## Tailwind CSS:

Tailwind CSS es un framework que se diferencia por su enfoque de "clases utilitarias". En lugar de proporcionar componentes predefinidos, Tailwind CSS ofrece una amplia gama de clases CSS que permiten construir diseños personalizados de manera eficiente.

Pero no son los únicos.

Estos frameworks de diseño y bibliotecas pueden ser muy útiles para agilizar el proceso de desarrollo frontend al proporcionar estilos coherentes y componentes reutilizables. La elección del framework dependerá de tus preferencias de diseño, las necesidades de tu proyecto y cómo se adapte a tu flujo de trabajo.

## ¡Maquetando prototipos!

Es el momento de ponernos manos a la obra. Ya tenemos preparado nuestro entorno de trabajo con VSCode instalado y algunos plugins como Prettier para formatear nuestro código. También hemos instalado Git y hemos creado una cuenta de github. Y hemos creado un proyecto el cual tenemos vinculado con nuestra cuenta de github.

Es el momento de volver al VSCode, situarnos en la rama prototipos... y ¡¡¡comenzar a picar código!!! 😎

# Home

## HOME Versíón escritorio

![Alt text](img/hom.png)

## HOME Versíón móvil

![Alt text](img/movil.png)

## Entorno de desarrollo

Vamos a comenzar a maquetar los prototipos para nuestro proyecto.

En primer lugar abre el VSCode y arrastra tu carpeta del proyecto. Si no recuerdo mal, se llamaba vanillagames10

Ahora deberías ver en la parte inferior izquierda de vscode el nombre de la rama en la que estás situado. Deberías estar en la rama prototipos, si no es así, puedes cambiar de rama haciendo clic (con el botón izquierdo) sobre el nombre de la rama.

Si todo es correcto deberías ver en la columna izquierda la carpeta prototipos con un archivo home.html y un archivo readme.md.

Abre el archivo home.html y comencemos a trabajar...

## Procedimiento

Comenzamos a maquetar la página home. De manera resumida debemos seguir los siguientes pasos:

Creamos plantilla html
Modificamos lang y title
Vinculamos la libreria css para bootstrap y bootswatch
Vinculamos la librería de iconos de boostrap
Vinculamos el js de bootstrap.
Creamos la estructura de la web dentro del body con las etiquetas header, main y footer
Copiamos el componente menú de la documentación de bootstrap (navbar) y lo modificamos para que se ajuste a nuestro prototipo. Lo usamos tanto en el header como en el footer.
Creamos, en el main, un h1 y una imagen.


<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />
        <!-- Bootswatch CSS -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />
        <!-- Bootstrap icons -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <!-- Mis estilos personales  -->
        <link rel="stylesheet" href="styles.css" />

        <title>Vanilla Games</title>
    </head>
    
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="ms-2 btn btn-success">
                                    Iniciar sesión
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="ms-2 btn btn-outline-light">
                                    Regístrate
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5 text-center fw-bold" style="font-size: 100px;">Vanilla Games</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            class="img-fluid"
                        />
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand fs-6" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">DAW - Asignatura de proyectos</span>
                    <a href="#" class="nav-link">carrebola GITHUB</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

# Registro

## REGISTRO Versíón escritorio

![Alt text](img/registroescritorio.png)

## REGISTRO Versíón móvil

![Alt text](img/registromovil.png)

## Procedimiento

Para maquetar la página registro.html podemos partir de la página home.html haciendo una copia y modificando la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

Modificamos la página home eliminando el botón registro del menú y el contenido de la etiqueta main excepto el h1 que modificaremos.
Cremos un div con una anchura máxima usando el atributo style y dentro creamos un formulario con los campos correspondientes.


<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Registro</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="ms-2 btn btn-success">
                                    Iniciar sesión
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5 text-center">Registro</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input id="nombre" type="text" class="form-control" />
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" type="text" class="form-control" />
                        <label for="email" class="form-label">Email:</label>
                        <input id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <a class="btn btn-primary w-100 mt-3" href="#">Enviar</a>
                    </form>
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

# Login

## LOGIN Versíón escritorio

![Alt text](img/loginescritorio.png)

# LOGIN Versíón móvil

![Alt text](img/loginmovil.png)

# Procedimiento

Para maquetar la página login.html podemos partir de la página registro.html haciendo una copia y modificando la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

Modificamos la página home eliminando el botón login del menú y el contenido de la etiqueta main excepto el h1 que modificaremos.
Creamos un div con una anchura máxima de 400px usando el atributo style y dentro creamos un formulario con los campos correspondientes.
Finalmente añadimos un enlace para actualizar la contraseña y un botón para registrarte si no lo estás.


<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Login</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="ms-2 btn btn-outline-light">
                                    Regístrate
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5 text-center">Inicia sesión</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <div class="form-check mt-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label class="form-check-label" for="flexCheckChecked">
                                Recordar sesión
                            </label>
                        </div>
                        <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                        <a class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
                    </form>
                    <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
                        >¿Eres nuevo? Regístrate</a
                    >
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

# Editar perfil

## EDITAR PERFIL (MENÚ)

![Alt text](img/editarperfil.png)

## EDITAR PERFIL (Ventana MODAL)

![Alt text](img/editarperfil2.png)

## Procedimiento

Para maquetar la página editPerfil.html podemos partir de la página home.html.

En este caso lo que nos interesa es modificar el componente navbar del header. Fíjate que ahora el usuario ya está registrado, por lo que puede acceder a los datos de su perfil y modificarlos.

Por otro lado, cuando un usuario está registrado, aparece un nuevo menú en la parte superior derecha (con el item PROYECTOS), éste es el menú ROL. También debemos añadir el menú usuario, el cual desplegará las opciones para editar perfil, cerrar sesión, etc.

De manera resumida debemos seguir los siguientes pasos:

Insertamos el componente modal al final del header.
Añadimos un botón para abrir ese modal (esto podemos hacerlo en el main, aunque es un código que después desecharemos)
En el componente navbar del header
Añadimos el menú ROL con el item PROYECTOS
Añadimos el menú USUARIO con el item Editar perfil(entre otros). Este item será una copia del botón que permite abrir el modal.


<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />

        <link rel="stylesheet" href="styles.css" />

        <title>Prototipos vanilla games</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Menú general -->
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <!-- Menú ROL -->
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <!-- Menú usuario -->
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <button
                                            type="button"
                                            class="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Editar perfil
                                        </button>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- VEntana edición perfil -->

            <!-- Modal -->
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
            <!-- Formulario de edición de perfil -->
                <form action="">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Edición de perfil
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div class="form border shadow-sm p-3">
                                    <div class="m-1" style="max-width: 400px">
                                        <div class="imgPerfil border shadow-sm p-3 mb-3">
                                            <div
                                                class="imagen mx-auto mb-1 rounded-circle"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 200px;
                                                    height: 200px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            ></div>
                                            
                                            <!-- Imagen de perfil -->
                                            <label for="imagen" class="form-label mt-3">URL imagen:</label>
                                            <input
                                                id="imagen"
                                                type="url"
                                                class="form-control"
                                                value="http://imagenavatar.png"
                                            />
                                        </div>

                                        <div class="">
                                            
                                            <!-- Nombre -->
                                            <label for="nombre" class="form-label">Nombre:</label>
                                            <input required id="nombre" type="text" class="form-control" />
                                            
                                            <!-- Apellidos -->
                                            <label for="apellidos" class="form-label">Apellidos:</label>
                                            <input id="apellidos" type="text" class="form-control" />
                                            
                                            <!-- Email -->
                                            <label for="email" class="form-label">Email:</label>
                                            <input required id="email" type="email" class="form-control" />
                                            
                                            <!-- Contraseña -->
                                            <label for="pass" class="form-label mt-3">Contraseña:</label>
                                            <input required id="pass" type="password" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                                <button type="button" class="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Modal para editar perfil en header</h1>
                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

# Proyectos

## PROYECTOS Versíón escritorio

![Alt text](img/proyectos.png)

## MIS PROYECTOS Versíón escritorio con tabla

![Alt text](img/proyectostabla.png)

## MIS PROYECTOS Versíón adaptable I con tarjetas

![Alt text](img/proyectostarjetas.png)

## MIS PROYECTOS Versíón adaptable II con tarjetas

![Alt text](img/proyectosadaptables.png)

## PROYECTOS Versíón móvil

![Alt text](img/proyectosmovil.png)

## Procedimiento

Para maquetar la página proyectos.html podemos partir de la página registro. Esta vez habrá que modificar el menú y la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

Actualizamos el menu navbar
Creamos la estructura de filas y columnas (row y col) necesaria para poder utilizar el componente nav-taps.
Insertamos los componentes button y el input copiandolos de la documentación de bootstrap.
Creamos un div con una tabla con las columnas y filas correspondientes
Creamos un div con las tarjetas card correspondientes
Creamos las versiones responsive para la vista de tarjetas.


<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Proyectos</h1>
                <div class="row mt-5">
                    <div class="col-12">
                        <ul class="nav nav-tabs">
                            <li class="nav-item w-50">
                                <a class="nav-link active" aria-current="page" href="#"
                                    >Todos los proyectos</a
                                >
                            </li>
                            <li class="nav-item w-50">
                                <a class="nav-link" href="#">Mis proyectos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border border-top-0 p-3">
                    <div class="row">
                        <div class="col-12 col-sm-4 mb-3">
                            <button class="btn btn-primary w-100">Subir proyecto</button>
                        </div>
                        <div class="d-flex col-12 col-sm-8 mb-3">
                            <button class="btn btn-secondary me-2">
                                <i class="bi bi-grid-3x3-gap"></i>
                            </button>
                            <button class="btn btn-secondary me-2">
                                <i class="bi bi-list"></i>
                            </button>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-search"></i
                                ></span>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Buscador"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping"
                                />
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-x"></i
                                ></span>
                            </div>
                        </div>
                    </div>
                    <!-- tabla -->
                    <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
                        <table
                            class="table table-hover align-middle mt-3"
                            style="min-width: 1000px"
                        >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        Nombre <span><i class="bi bi-caret-down"></i></span>
                                    </th>
                                    <th>
                                        Descripción <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Enlace <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>Repositorio</th>
                                    <th>
                                        Autor <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Fecha <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Estado <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                            </tr>
                        </table>
                    </div>
                    <!-- tarjetas -->

                    <div class="d-xl-none row">
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

# Detalle proyecto

## DETALLE DEL PROYECTO Versíón escritorio

![Alt text](img/detalles.png)

## DETALLE DEL PROYECTO Versíón móvil

![Alt text](img/detallesmovil.png)

## Procedimiento

Para maquetar la página detalleProyecto.html podemos partir de la página editPerfil.html.

De manera resumida debemos seguir los siguientes pasos:

Creamos la estructura de filas y columnas necearia.
Insertaremos el título y el botón Volver
Insertamos la imagen (que fluirá con la columna) en la columna izquierda
Insertamos el texto en la columna derecha
Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.
Insertaremos un botón en la parte inferior derecha con posicionamiento absoluto


<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">       
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src=".images/avatar.svg" alt="" width="25">
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px;">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Detalle del proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em;"></i>
                        Volver</bottom>
                </div>
                
                <div class="row mt-2">
                    <div class="col-12 col-md-4 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-12 col-md-8">
                        <p>
                            <p><strong>Nombre: </strong><span id="nombre">TETRIS</span></p>
                            <p><strong>Descripción: </strong><span id="nombre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
                            <p><strong>Estado: </strong><span id="nombre">Estado</span></p>
                            <p><strong>Fecha: </strong><span id="nombre">12/12/2023</span></p>
                            <p><strong>Enlace: </strong><span id="nombre">http://www.enlaceapp.com</span></p>
                            <p><strong>Repositorio: </strong><span id="nombre">carrebola.github.com/123456</span></p>
                        </p>
                    </div>
                </div>
                <div
                    class="container fixed-bottom d-flex justify-content-end"
                    style="padding: 0px 0px 100px 0px"
                >
                    <button
                        class="btn btn-success rounded-circle fs-3 shadow"
                        style="width: 50px"
                    >
                        <i class="bi bi-pencil"></i>
                    </button>
                </div>
                
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

# Nuevo proyecto y Editar proyecto

## NUEVO PROYECTO Versíón escritorio

![Alt text](img/nuevoproyecto.png)

## EDITAR PROYECTO Versíón escritorio

![Alt text](img/editarproyecto.png)

## NUEVO PROYECTO Versíón móvil

![Alt text](img/nuevo.png)

## EDITAR PROYECTO Versíón móvil

![Alt text](img/editarmovil.png)

## Procedimiento

Para maquetar la página nuevoProyecto.html podemos partir de la página detalleProyecto.html.

De manera resumida debemos seguir los siguientes pasos:

Creamos la estructura de filas y columnas necearia.
Insertaremos el título y el botón Volver
Insertamos la imagen (que fluirá con la columna) en la columna izquierda
Insertamos el formulario con sus campos en la columna derecha
Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.
Para maquetar la página editProyecto.html partiremos de la página nuevoProyecto.html y tan solo añadiremos el campo de la url de la imagen y cambiaremos título y botón 'Atualizar'


<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Nuevo proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                        Volver</bottom
                    >
                </div>

                <div class="row mt-2">
                    <div class="col-12 col-md-4 pt-2 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-12 col-md-8">
                        <form action="" class="form">
                            <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                            <input id="nombre" type="text" value="Nombre Autor" class="form-control" />

                            <label class="form-label mt-2" for="descripcion"
                                ><strong>Descripción: </strong></label
                            >
                            <textarea id="descripcion" class="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea>
                            <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
                            <select id="estado" class="form-control">
                                <option value="estado">estado</option>
                                <option value="otro estado">otro estado</option>
                            </select>
                            <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
                            <input id="fecha" type="date" class="form-control" value="12/12/2023"/>
                            <label class="form-label mt-2" for="nombre"><strong>Enlace: </strong></label>
                            <input id="enlace" type="text" class="form-control" value="http://enlace.com" />
                            <label class="form-label mt-2" for="nombre"
                                ><strong>Repositorio: </strong></label
                            >
                            <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />
                            <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">
                        </form>
                    </div>
                </div>
                
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>
</html>

