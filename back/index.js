import express,{json} from 'express';
import cors from "cors"; // permitir coneiones desde el domini del front

import conectarDB from './config/db.js'
//import estudianteRouter from './routes/estudianteRoutes.js';
import profesorRoutes from './routes/profesorRoutes.js';
import calificacionRoutes from './routes/calificacionRoutes.js'

const APP = express();  //  Para concentrar la funcionalidad de express
conectarDB();   //  Conexion a la base de datos
APP.use(express.json());    //  Para procesar informacion JSON correctamente

//- CORS
// Configurar CORS
    // Dominios Permitidos
const whiteList = ["http://localhost:4200"];
const corsOptions = {
    origin:function(origin,callback){
        // Comprobar en la lista blanca
        if(whiteList.includes(origin)){
            // Puede consultar la API
            callback(null,true);
        }else{
            // No esta permitido
            callback(new Error("Error de CORS"));
        };
    }
};

//- routing Rutas principales

//  APP.use(cors(corsOptions)); --SOLO SE DESCONECTA PARA USARSE CON EL FRONTEND
APP.use(cors(corsOptions));
//  Para cada solicitud la ruta inicia:'http://localhost:4000/(rutas index.js)/(rutas router/archivoRutas.js)' 
//comentado para otra funcionalidad  APP.use('/app/estudiante',estudianteRouter);    
//  Profesor

APP.use('/app/profesor',profesorRoutes);    // Ruta de Profesores

APP.use('/app/calificacion', calificacionRoutes); //Ruta de Calificaciones


//  Escucha las conexiones en el puerto 4000
//const PORT = process.env.PORT || 4000;  // Puerto del servidor
const PORT = 4000;  // Puerto del servidor
APP.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});