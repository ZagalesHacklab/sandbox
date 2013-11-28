module EjemploSinatra
	module ResponseUtils
		def ResponseUtils.parse_hash_to_json(hash_to_parse)
			hash_to_parse.to_json
		end
	end
end
