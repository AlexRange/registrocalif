import mongoose from "mongoose";


const alumnoSchema = mongoose.Schema({
    Nombre:{type:String,required:true,trim:true},
    ApePat:{type:String,required:true,trim:true},
    ApeMat:{type:String,required:true,trim:true},
    Grupo:{type:String,required:true,trim:true},
    Calificacion:{type:number,required:true,trim:true}
});


const Alumno = mongoose.model('Alumno',alumnoSchema);

export default Alumno;