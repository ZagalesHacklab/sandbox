#Este archivo seria el "main" de nuestra aplicacion
#aqui requeriremos las gemas que nos hagan faltan podremos especificar
#acciones que se ejecutaran antes de determinadas request...
require 'sinatra/base'
require 'json'

module EjemploSinatra
	class MyApp < Sinatra::Base
		puts 'Estoy en app.rb'
		#Cargo un modulo
		require_relative 'lib/response_utils'
		include ResponseUtils

		puts 'voy a mostrar el valor de la constante que defini en el config.ru'	
		puts APP_ROOT
		#cuando hago un set :nombre defino un valor que sera accesible desde
		#las routes de la forma:
		#settings.root
		set :root,APP_ROOT
				
	end
end

require_relative 'models/init'
require_relative 'routes/init'
