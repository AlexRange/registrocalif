import express from 'express';
import {
    obtenerAlumno
} 
from "../controllers/profesorController.js"; // metodos del controlador

const router = express.Router(); // Esto es para poder usar los metodos http (post,put,delete,...)


router.post('/add',añadirPro);

router.post('/perfil',obtenerPerfil); 
router.post('/alumno',obtenerAlumno); 
router.get('/list')

export default router;