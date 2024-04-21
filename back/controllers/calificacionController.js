import Calificacion from "../models/Calificacion.js";


const añadirCal = async (req,res) => {
    console.log(req.body);
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwCalificacion = await new Calificacion(req.body); // asi se crear un objeto estudiante
        
        const guardado = await nwCalificacion.save(); // Asi se gusrda el objeto en la base de datos
        return res.json(({msg:"Calificacion Registrada"}));
    }catch(error){
        return res.json({msg:"Faltan datos"})
    }
}


export{
    añadirCal
}