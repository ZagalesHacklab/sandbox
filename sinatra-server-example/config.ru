#Las aplicaciones Sinatra usan rack para inicializarse.
#Rack ejecuta esta archivo cuando lanzamos la aplicacion.
#En este archivo se especifican las acciones/configuraciones 
#que queremos que rack ejecute al iniciarse.
#Entre ellas por ejemplo especificar constantes que estaran accesibles 
#desde la aplicacion, o lanzar la propia aplicacion.
#Ahora por ejemplo vamos a lanzar la aplicacion:
puts 'Estamos en el archivo config.ru'
puts 'Hacemos configuraciones previas a arrancar la aplicacion en caso de ser necesario'
puts 'Ejemplo: Guardamos el path raiz de la aplicacion en una constante llamada APP_ROOT'
APP_ROOT = File.dirname(__FILE__)
#requerimos el archivo de la aplicacion
require ::File.join(APP_ROOT, 'app')

puts 'Arrancamos la aplicacion'
run EjemploSinatra::MyApp

	
 
