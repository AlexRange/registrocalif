import Alumno from "../models/Alumno.js";



const obtenerAlumnos = async (req,res) => {
    const {grupo} = req.query;
    console.log('body');
    console.log(grupo);
    try{
        //  Si no estan todos los campos en el formulario, no se hace el registro
        const nwProfesor = await Alumno.findOne({'Grupo':grupo});
        console.log(nwProfesor);
        return res.json(nwProfesor);
    }catch(error){
        return res.json({msg:"Clave Incorrecta"})
    }
}


export{
    obtenerAlumnos
}
