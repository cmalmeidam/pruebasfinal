# Entrega Semana 8

<h2> 1. Ejecutar proyecto pruebas reconocimiento RIPuppet </h2>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-18-191-52-241.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Descargar o clonar el código del repositorio de la rama main
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta /reconocimiento/RIPuppet_
* Intallar dependencias del proyecto npm install
* Ejecutar el comando node index.js
* Instalar npm install -g http-server
* Ingresar a la carpeta de results acá puede ver el resultado de la ejecución con mas detalle
* Si quiere ver el informe ejecutar el comando http-server
* Abrir en el navegador http://localhost:8080/ y explorar el informe de la ejecución 

<h2> 2. Ejecutar proyecto pruebas reconocimiento Monkey </h2>

<h2> 3. Ejecutar proyecto pruebas e2e Cypress </h2>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-18-191-52-241.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Debe tener instalado en la maquina cypress versión 7.3.0, validar con el comando cypress --version si no lo tiene o tiene otra versión por favor instalarla ejecutando los comandos npm uninstall -g cypress y luego el comando npm install -g cypress
* Descargar o clonar el código del repositorio de la rama main
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta /e2e/cypress
* Ejecutar el comando cypress run --headless o si lo desea usar el comando cyppress open y ejecutar cada .spec.js de forma manual  

<h2> 4. Ejecutar proyecto pruebas e2e Kraken </h2>

<h2> 5. Ejecutar proyecto pruebas vtr </h2>


<h2> 6. Ejecutar proyecto pruebas generación de datos </h2>

* El aplicativo Ghost se encuentra desplegado en una instacia EC2 en AWS http://ec2-18-191-52-241.us-east-2.compute.amazonaws.com:2368/ por lo que no es necesario tenerlo instalado en la maquina local.
* Debe tener instalado en la maquina cypress versión 7.3.0, validar con el comando cypress --version si no lo tiene o tiene otra versión por favor instalarla ejecutando los comandos npm uninstall -g cypress y luego el comando npm install -g cypress
* Descargar o clonar el código del repositorio de la rama main
* Abrir linea de comandos e ir a la carpeta en donde descargo o clono el repositorio
* Ingresar a la carpeta /validacionDatos
* Intallar dependencias del proyecto npm install
* Ejecutar el comando cypress run --headless o si lo desea usar el comando cyppress open y ejecutar cada .spec.js de forma manual 
