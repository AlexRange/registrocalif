import express from 'express';
import {
    añadirPro, 
    obtenerPerfil
} 
from "../controllers/profesorController.js"; // metodos del controlador

const router = express.Router(); // Esto es para poder usar los metodos http (post,put,delete,...)


router.post('/add',añadirPro); // Primer seccion se ruta para insertar

router.post('/perfil',obtenerPerfil); 
// asi se exporta el router para poder ser usado en el index (rutas principales)
export default router;