/**
 *
 *
 * SemVer --------------------------------------------------------------------------
 *
 * Es una forma de comunicar a nuestros usuarios finales
 * los tipos de cambios introducidos en las nuevas versiones
 *
 * Ejemplo: Version 20.9.0
 *
 * - primer numero: Mayor
 * - segundo numero: Menor
 * - tercero numero: Patch
 *
 * cuando desarrollamos una app el estander deberia
 * comenzar con 1.0.0 (version utilizable).
 *
 * Cuando aparece el 1 punto algo es una version no terminada (cruda)
 *
 * Cuando se encuentra un bugg y se corrigio ahora la version pasa a ser
 * 1.0.1 (El patch se incrementa cuando vamos arreglando cosas). Por
 * eso siempre vamos a elegir la que tenga el patch mas alto, con mas
 * errores corregidos.
 *
 * Cuando agregamos una caracteristica nueva, una funcionalidad nueva, se aumenta
 * el mainor siendo: 1.1.0 (el patch se resetea)
 *
 * Cuando se cambia de tecnologia base, puede cambiar la compatibilidad
 * entonces el numero mayor cambia: 2.0.0
 *
 */

//----------------------------------------------------

/**
 *
 * El codigo que esta desarrollado por terceros en nuestro
 * programa se llamaran dependencias.
 *
 * Todos los integrantes del proyecto necesitan la misma
 * version de esos paquetes.
 *
 * Para esto necesitamos un gestor de paquetes, que viene
 * con node y se llama NPM.
 *
 *
 * Existe tanto el Repositorio global como a nivel de carpeta.
 * Es decir, podemos instalar un paquete para que este disponible
 * a nivel de usuario (global) o a nivel de carpeta/proyecto.
 *
 * - COMANDO: npm init
 *
 * Comando que me generara el archivo package.json
 * Cuando sea utilizado, apareceran una serie de preguntas.
 *
 * COMANDO: npm init -y
 * La diferencia es que le da ENTER a todas las preguntas automaticamente.
 *
 * Luego de esto ya podemos instalar paquetes.
 * 
 * - COMANDO: npm install json-server
 * - COMANDO GLOBAL: npm install -g typescript (NO HACER)
 *
 * La carpeta "node_modules" --------------------
 *
 * contiene todas las dependencias de
 * tu proyecto, incluyendo "json-server", así como cualquier
 * otra dependencia que "json-server" pueda necesitar.
 *
 * El archivo "package-lock.json" --------------------
 *
 * Se genera para registrar las versiones específicas de
 * "json-server" y todas las dependencias relacionadas
 * que se instalan.
 *
 * La idea es que si yo envio esto a gitHub solo envie
 * mi codigo personal. Para ignorar esta carpeta creo el
 * archivo .gitIgnore
 *
 * Si alguien clona mi repositorio va a tener que descargar el node_module
 * lo que tiene que hacer es el 'npm install' que descargara todas
 * las dependencias del proyecto nuevamente. Ya que el package.json contiene
 * toda la informacion necesaria para que se pueda hacer.
 *
 * COMANDO: npm -g list (muestra las dependencias globales)
 * COMANDO: npm list (muestra las dependencias de este nivel)
 *
 * Es importa saber que todo lo que necesita mi proyecto para funcionar
 * tiene que estar instalado a nivel de proyecto, sino no aparecera en el package.
 
COMANDO: node app.js (ejecuta un archivo que tengamos)
agregamos en package, scripts,  "start": "node app.js"

COMANDO: npm run (me muestra los scripts, test y start que creamos nosotros)
                                 ------   -----  -----
Nosotros hariamos npm run start

Voy a crear otro "server": "json-server -W db.json -d 2000
-w: watched
-d: delay

ahora puedo hacer "npm run server"
*/
