
# EVALUACIÓN TÉCNICA NUXIBA #

Prueba: **DESARROLLADOR JR**

Deadline: **1 día**

Nombre: 

------
## Clona y crea tu repositorio para la evaluación ##
* Clona este repositorio en tu máquina local
* Crear un repositorio público en tu cuenta personal de GitHub, BitBucket o Gitlab
* Cambia el origen remoto para que apunte al repositorio público que acabas crear en tu cuenta
* Coloca tu nombre en este archivo README.md y realiza un push al repositorio remoto

------
## Prueba 1 ##
* Lee la documentación del API de [JSONPlaceholder](http://jsonplaceholder.typicode.com/guide/) y crea una aplicación (dentro del directorio **Prueba_1**) en el lenguaje de tu preferencia que realice lo siguiente:
	* Listar a los 10 usuarios **_(10 puntos)_**
	* Al seleccionar un usuario muestra algunos campos con su información(name, username, email, etc.) y coloca 2 botones para poder seleccionar los "posts" y "todos" que estén relacionados con el usuario. **_(15 puntos)_**
	* Al dar click en el botón de "posts" muestra todas las publicaciones que ha realizado el usuario, cada publicación deberá tener anidados sus comentarios. **_(15 puntos)_**
	* Al dar click en el botón de "todos" muestra las tareas del usuario ordenadas por la propiedad "id" de mayor a menor. **_(15 puntos)_**
	* En la sección de "todos", crea un formulario para poder agregar una nueva tarea al usuario, este debe de contener una caja de texto (title), un checkbox (completed) y un botón de guardar. Al dar click en el botón, manda la información necesaria al API con el método HTTP correcto para que la tarea quede guardada. **_(25 puntos)_**


> *Nota: al hacer la petición de la nueva tarea, el API no la guardará y solo regresará un objeto JSON con la propiedad **id** de la nueva tarea agregada (id: 201), esto indica que todo se realizó de forma correcta*


Algunos endpoints que puedes utilizar:

* https://jsonplaceholder.typicode.com/users 
* https://jsonplaceholder.typicode.com/users/(userId)
* https://jsonplaceholder.typicode.com/users/(userId)/posts
* https://jsonplaceholder.typicode.com/post/(postId)/comments
* https://jsonplaceholder.typicode.com/users/(userId)/todos

Objeto que espera el servidor para guardar la nueva tarea:


```javascript
{
  "userId": <int>,
  "title": <string>
  "completed": <bool>
}
```

**PLUS: Si conoces algún patrón de diseño de software no dudes en usarlo** **_(+ 10 puntos)_**

------
## Prueba 2 ##

Para esta prueba será necesario agregar (al directorio **Prueba_2**) las sentencias de SQL con las que se creo el esquema(base de datos y tablas) y las consultas realizadas para responder a los siguientes puntos:

> *Nota: Para realizar esta prueba es necesario tener una instancia de [SQL Server Developer, SQL Server Express](https://www.microsoft.com/es-mx/sql-server/sql-server-downloads) o [MySQL Community](https://dev.mysql.com/downloads/mysql/) instalada en tu equipo, si por algún motivo no puedes instalar una versión de las anteriores, puedes entrar a [db-fiddle](https://www.db-fiddle.com/) para realizarla*

* Construye una base de datos y crea las siguientes tablas dentro de ella:
	* **logDial** con las siguientes columnas
		* **idLlamada** varchar(10)
		* **fechaDeLlamada** dateTime
		* **tiempoDialogo** smallint
		* **telefono** varchar(10)
		* **tipoDeLlamada** varchar(15)
	* **costos** con las siguientes columnas
		* **tipoDeLlamada** varchar(15)
		* **costo** decimal(10,4)
		
* Con las tablas contruidas, inserta los datos proporcionados en el archivo de excel **DatosPracticaSQL.xlsx** que se encuentran en la carpeta **Prueba_2** (revisar las dos hojas del archivo)
* Genera las sentencias SQL que respondan lo siguiente:
	* Que muestre los registros con tipo de llamada **Cel LD** durante el **mes febrero** **_(5 puntos)_**
	* Que indique el promedio de tiempo de dialogo de las llamadas con tipo **Cel LD** durante el **mes de febrero** **_(5 puntos)_**
	* Que muestre el **número en minutos de dialogo** (tomando tiempoDialogo que está en segundos) y el **costo** de todas las llamadas del **mes de enero** **_(10 puntos)_**

------
## Prueba 3  ##

Leer todo la seccion de esta preuba antes de empezar a responder.

Para esta seccion se trabajara con los archivos:
	index.html
	recursos.js
	superheroes.json

los cuales estan en la carpeta Prueba 3

La finalidad de esta seccion es conocer tus habilidades un poco mas a fondo.

* El primer punto es hacer funcionar la pagina web que representan los 3 archivos mencioandos arriba **_(5 puntos)_**, la idea de esta pagina es mostrar una lista de 20 super heroes, la lista consta de 3 columnas 	las cuales son:
	* nombre de super heroe
	* Editorial que saca sus comics
	* Identidad secreta.

* Segundo punto, realiza el cambio para que los encabezados sean parte de la tabla de super heroes, toma en cuenta que es importante que se distinga que es un encabezado, aplica un diseño a tu gusto para cubrir este punto, tu decides que es todo lo que seria necesario hacer para estar completa la tarea **_(5 puntos)_**.


* Tercer punto, realiza un cambio para que sin importar el numero de super heroes que contenga el json se puedan mostrar sin tener que cambiar el codigo, agrega las columnas primera aparicion (first_appearance) y characters a la tabla de super Heroes (las dos columnas faltantes) **_(10 puntos)_**.

* Cuarto punto, implementa un archivo CSS el cual cambie la vista de la pagina web, donde por lo menos se cumplan los siguientes puntos:
	* el diseño que realizaste para los encabezados se mantenga
	* las filas nones de la tabla tengan un diseño especifico y las pares otro diseño (diferente al que tiene el encabezado y diferente entre nones y pares).
	* Realiza los cambios que creas necesarios para la informacion que la tabla se vea mejor.
		* por lo menos las filas tengan una altura menor (poder mostrar mas super heroes sin cambiar la resolucion)
		* por lo menos realizar 4 cambios extra.
	* centrar la tabla, si es posible que se mantenga centrada sin importar la resolucion **_(5 puntos)_**
	

Respuestas esperadas
	crea una carpeta llamada Prueba 3
	dentro de la carpeta mencionada arriba crea otra carpeta llamada "respuesta1" y agrega la respuesta del primer punto de esta prueba.
	dentro de la carpeta "Prueba 3" agrega otra carpeta y agrega las respuestas de los otros puntos.


------
### Realiza el push del código de tus pruebas y compártenos el link a tu repositorio remoto 😊 

------
Si tienes alguna duda sobre la evaluación puedes mandar un correo electrónico a [Rodrigo Acevedo](mailto:racevedo@nuxiba.com?subject=Dudas%20sobre%20evaluación%20técnica)

Manda la liga de tu repositorio público a [Verónica Llerenas](mailto:vllerenas@nuxiba.com?subject=[EvaluaciónDesarrollo]%20Este%20es%20mi%20repositorio)