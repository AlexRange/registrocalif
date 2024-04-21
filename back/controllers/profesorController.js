import Profesor from "../models/Profesor.js";
import generarId from "../helpers/generarid.js";

const añadirPro = async (req,res) => {
    console.log(req.body);
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwProfesor = await new Profesor(req.body); // asi se crear un objeto estudiante
        nwProfesor.Clave = generarId(); 
        const guardado = await nwProfesor.save(); // Asi se gusrda el objeto en la base de datos
        return res.json(({msg:"Nuevo Profesor Registrado",cve:nwProfesor.Clave}));
    }catch(error){
        return res.json({msg:"Faltan datos"})
    }
}

const obtenerPerfil = async (req,res) => {
    const {clave} = req.body
    console.log('body');
    console.log(req.body);
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwProfesor = await Profesor.findOne({'Clave':clave});
        console.log(nwProfesor);
        return res.json(({msg:"Inicio Exitoso",cve:nwProfesor}));
    }catch(error){
        return res.json({msg:"Clave Incorrecta"})
    }
}


export{
    añadirPro,
    obtenerPerfil
}