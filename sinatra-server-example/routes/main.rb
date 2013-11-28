module EjemploSinatra
	class MyApp < Sinatra::Base
		get '/', :provides => 'json' do
			puts 'He recibido una request'
			puts 'mostrar el directotio que definimos como root en app.rb'
			puts settings.root
			h_response = {'nombre' => 'juan','apellido'=> 'Palomo', 'edad' => 302}
			#se devuelve un array 
			#El primer elemento es el codigo de la respuesta
			#El segundo elemento es la respuesta en formato json
			[201,ResponseUtils.parse_hash_to_json(h_response)]
		end		

	end




end
