import mongoose from "mongoose";


const profesorSchema = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    Asignatura:{type:String,required:true,trim:true},
    Grupo:{type:String,required:true,trim:true},
    Clave:{type:String,required:true,trim:true}
});


const Profesor = mongoose.model('Profesor',profesorSchema);

export default Profesor;