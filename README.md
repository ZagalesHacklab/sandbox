Sandbox de Zagales Hacklab
==========================
[![Build Status](https://travis-ci.org/ZagalesHacklab/sandbox.png)](https://travis-ci.org/ZagalesHacklab/sandbox)


Nuestro cajon de arena para jugar y experimentar

Para hacer funcionar el hola mundo de Angular debes tener instalado en tu máquina:

* [node](http://nodejs.org/)

También usaremos [yeoman](http://yeoman.io/) (se te instalará al resolver las dependencias en el siguiente paso). 

Despues de clonar el repositorio ejecuta (desde la carpeta del repositorio):

* npm install
* ./node_modules/.bin/bower install

Para ejecutar los test:

* ./node_modules/.bin/grunt test
####Runeando el ejemplo de sinatra

> Necesitas tener instalado Ruby 2.0.0-p353(otras versiones tambien funciona pero acordamos usar esta en el primer sprint)

> Desde consola:
> > <code>gem install bundler</code>

> > (Si usas rbenv: <code>rbenv rehash</code>)

> > <code>cd sinatra-server-example</code>

> > <code>bundle install</code> 

> > (Si usas rbenv: <code>rbenv rehash</code>)

> > <code>Bundle exec rackup</code>

> Con esto arrancara la aplicación, veras algunos mensajes en la consola que van explicando lo que va pasando dentro de la aplicación.

> Para comprobar que todo funciona introduce en el navegador que mas te guste(firefox, chrome, ie..) la ruta que pone en la consola cuando arrancas las aplicación, por defecto *http://localhost:9292*
y deberías ver el json que devuelve el método get '/' en routes/main.rb

> P.D: He intentado en cada archivo explicar un poco lo que hace (las explicaciones no son lo mio)
