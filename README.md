# Entrega Semana 8

<h1> I Generalidades </h1>

<h2> 1. Link a la estrategia de pruebas (Acceder con usuario uniandes) </h2>
https://uniandes-my.sharepoint.com/:b:/g/personal/pa_cardenasg1_uniandes_edu_co/EdEGE89W6etJnuJTaKauATgBwKPQ2XXspWcEheOyk25q5g?e=A30z9N

<h2> 2. Inventarios Pruebas </h2>

* Inventario Pruebas Manuales (Acceder con usuario uniandes) -> [Link de invenrario pruebas manuales](https://uniandes-my.sharepoint.com/:x:/g/personal/c_almeidam_uniandes_edu_co/EQTFQL6Kz7NBqXlE84-yr5cBhW2zFxbltw_L7sffnMF1MA?e=09cUPI)
* Validación de datos -> [Link de pruebas validación datos](https://drive.google.com/file/d/1h52tg5APX7QQojiNFdxQvAcMPjS6eK7F/view?usp=sharing)
* Pruebas E2E y VRT   -> [Link de pruebas E2E y VRT](https://docs.google.com/spreadsheets/d/1rsDur30pZZxiY6kS4BnOqiuCtGlSV4KcPbj3URbYtG8/edit?usp=sharing)

<h2> 3. Defectos Encontrados </h2>

* [Link de incidencias en Jira](https://team-1618171251165.atlassian.net/jira/software/c/projects/TSDL/issues/)
* Usuario: misw.411.202116113@gmail.com 
* Contraseña: uniandes*21

<h2> 4. Video de la entrega </h2>

* [Link del video de la entrega](https://www.youtube.com/watch?v=rQa0E9zJaPM)

<h1> II Pruebas </h1>

<h2> 1. Pruebas reconocimiento  </h2>

<h3> 1.1 Ejecutar proyecto RIPuppet </h3>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-18-191-52-241.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Descargar o clonar el código del repositorio de la rama main
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta ```/reconocimiento/RIPuppet```
* Intallar dependencias del proyecto ```npm install``` 
* Ejecutar el comando ```node index.js```
* Instalar ```npm install -g http-server```
* Ingresar a la carpeta de results acá puede ver el resultado de la ejecución con mas detalle
* Si quiere ver el informe ejecutar el comando ```http-server```
* Abrir en el navegador http://localhost:8080/ y explorar el informe de la ejecución 

<h3> 1.2 Ejecutar proyecto Monkey </h3>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/# por lo que no es necesario tenerlo instalado en la maquina local.
* Descargar o clonar el código del repositorio de la rama main
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta ```/reconocimiento/monkey-cypress_```
* Instalar dependencias del proyecto ```npm install``` 
* Ejecutar el comando ``` cypress run --headless --config-file monkey-config.json```
* Ejecutar el comando ``` cypress run --headless --config-file monkey-config.json```
* Ingresar a la carpeta  ```/cypress/screenshots```
* Alli podra observar un screenshot con el resumen de la ejecucion


<h2> 2. Pruebas e2e </h2>

<h3> 2.1. Ejecutar proyecto Cypress </h3>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-18-191-52-241.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Debe tener instalado en la maquina ```cypress versión 7.3.0```, validar con el comando ```cypress --version``` si no lo tiene o tiene otra versión por favor instalarla ejecutando los comandos ```npm uninstall -g cypress``` y luego el comando ```npm install -g cypress```
* Descargar o clonar el código del repositorio de la rama ```main```
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta ```/e2e/cypress```
* Ejecutar el comando ```cypress run --headless``` o si lo desea usar el comando ```cyppress open``` y ejecutar cada ```.spec.js``` de forma manual  

<h3> 2.2 Ejecutar proyecto Kraken </h3>


* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Debe tener instalado en la maquina kraken-moblile y sus dependencias, en el path de Kraken no debe haber nombres de archivos con "."
* Ingresar al file donde tiene instalado kraken-mobile y sus dependencias.
* Ubiquese en la raiz de la carpeta donde vive kraken-mobile y alli pegue la carpeta ```ghost3.42.5``` que se encuentra en el directorio ```\e2e\kraken\``` de este repositorio
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta /kraken con el comando cd kraken
* Ingresar a una carpeta de un escenario con el comando cd <path>
* Ejecutar el comando gem install byebug
* Ejecutar el comando bundle exec kraken-mobile run
* Esperar que termine la ejecución del escenario.
* En consola escribir el comando cd ..
* Ingresar al siguiente escenario cd <path>
* Repetir el proceso con todos los demás escenarios.

<h2> 3. Ejecutar proyecto pruebas vrt </h2>

<h3> 3.1. Ejecutar proyecto Cypress </h3>

* El aplicativo Ghost se encuentra desplegado en dos instacia EC2 en AWS para la versión 3.3.0 es http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ ya para la versión 3.42.5 es http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368 por lo que no es necesario tenerlo instalado en la maquina local.
* Debe tener instalado en la maquina ```cypress versión 7.3.0```, validar con el comando ```cypress --version``` si no lo tiene o tiene otra versión por favor instalarla ejecutando los comandos ```npm uninstall -g cypress``` y luego el comando ```npm install -g cypress```
* Descargar o clonar el código del repositorio de la rama ```main```
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta ```/vrt/cypress```
* Ejecutar el comando ```cypress run --headless``` o si lo desea usar el comando ```cyppress open``` y ejecutar cada ```.spec.js``` de forma manual  

<h3> 3.2 Ejecutar proyecto Resemble </h3>

* Debe haber terminado la ejecución de todos los escenarios de cypress. 
* Ingresar a la carpeta ```/vrt/resemble``` desde la raiz del repo
* Ejecutar el comando ```npm install``` para descargar las dependencias del proyecto
* Ejecutar el comando ```node index.js```
* Los resultados de la ejecución se veran en las carpetas ```/vrt/cypress/cypress/screenshots/(escenario)/resultado``` dentro de esta carpeta se genera las imagenes de las diferencias y los html del reporte.

<h3> 3.3 Ejecutar proyecto Backstop </h3>

* Debe haber terminado la ejecución de todos los escenarios de cypress. 
* Ingresar a la carpeta ```/vrt``` desde la raiz del repo
* Ejecutar el comando ```npm install``` para descargar las dependencias del proyecto
* Debe tener instalado backstopjs en la ```versión v5.3.2``` en el equipo de ejecución, comprobar la instalación con el comando ```backstop -v``` sino lo tiene ```npm install -g backstopjs```
* Ejecutar el comando ```node scriptbackstop.js```
* Los resultados de la ejecución se veran en las carpetas ```/backstop_data/html_report/``` dentro de esta carpeta se genera el html del reporte.

<h3> 3.4. Generación del reporte unificado </h3>

* Previamente debe haber terminado la ejecucion correcta de los pasos anteriores
* Ingresar a la carpeta ```/vrt``` desde la raiz del repo
* Ejecutar el comando ```node generarReporte.js ```
* Esto generara un archivo en la carpeta raiz llamado ```reporteConsolidado.html```
* Abra en su navegador el reporte y podra visualizar el listado consolidado de los reportes Resemble y Backstop


<h2> 4. Ejecutar proyecto pruebas validación de datos </h2>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-18-191-52-241.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Debe tener instalado en la maquina ```cypress versión 7.3.0```, validar con el comando ```cypress --version``` si no lo tiene o tiene otra versión por favor instalarla ejecutando los comandos ```npm uninstall -g cypress``` y luego el comando ```npm install -g cypress```
* Descargar o clonar el código del repositorio de la rama ```main```
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta ```/validaciondatos```
* Intallar dependencias del proyecto npm install
* Ejecutar el comando ```cypress run --headless``` o si lo desea usar el comando ```cyppress open``` y ejecutar cada ```.spec.js``` de forma manual 
