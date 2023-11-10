const express = require('express')
const router = express.Router()
const usuariosController = require('../../controlles/usuariosController')

//Definir las rutas 


router.get('/',usuariosController.ObtenerTodosUsuarios);


router.get('/:id',usuariosController.obtenerUsuarioPorId);


router.post('/',usuariosController.crearUsuario);


router.put('/:id',usuariosController.actualizarUsuario);


router.delete('/:id', usuariosController.eliminarUsuario);

module.exports=router;