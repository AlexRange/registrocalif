import mongoose from "mongoose";


const calificacionSchema = mongoose.Schema({
    Estudiante:{type:String,required:true,trim:true},
    Asignatura:{type:String,required:true,trim:true},
    Calificacion:{type:Number,required:true,trim:true}
});


const Calificacion = mongoose.model('Calificacion', calificacionSchema);

export default Calificacion;