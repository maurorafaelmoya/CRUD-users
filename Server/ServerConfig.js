    /**
     * 
     * Apartado donde se configura el servidor
     * 
     */

    const http = require('http');

    const express = require("express");
    var cors = require('cors');

    var corsOptions = {
        origin: [
            'http://localhost:3000',
        ],
    }
    
    class Server {
        constructor(){
            
            this.app = express();
            this.port = process.env.PORT;
            this.usersPath='/api/users'      
    
            this.server = http.createServer( this.app );

            //Middlewares
            this.middlewares();

            //Rutas de la aplicación
            this.routes();
            
        }

        middlewares(){
            //CORS
            this.app.use(cors(corsOptions));

            //Lectura y parseo del body
            this.app.use(express.json());

        }

        //rutas de la aplicación
        routes(){
            this.app.use(this.usersPath,  require ('../Users/usersRoutes'));
        }
        
        //se levanta el servidor
        listen(){

            this.server.listen(this.port, ()=>{
                console.log('Servidor corriendo en puerto', this.port)
            });
            
        }
    } 
    
    module.exports=Server;