import mongoose from "mongoose"; // controlador 

const conectarDB = async () =>{
    try{
        const conection = await mongoose.connect("mongodb://localhost:27017/califr1"); // Crando la conexión
        let url = `${conection.connection.host}:${conection.connection.port}`; // para mensaje de status 
        console.log(`MongoDB Conectado en: ${url}`);
    }catch(error){
        console.log(`error: ${error}`);
        process.exit(1); // Para forzar que el proceso termine
    }
};

export default conectarDB;