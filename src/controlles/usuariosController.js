const Usuario = require('../models/usuariosModel')

//Todos los usuarios -- SELECT * usuarios
exports.ObtenerTodosUsuarios = async(req,res)=>{
try{
    const usuarios = await Usuario.findAll();
    res.status(200).json({
        estado: 1,
        mensaje: "Usuarios encontrados",
        usuarios : usuarios
    })
}catch(error){
res.status(500).json({
    estado:0,
    mensaje: "ocurrio un error desconocido"
})
}
}

//Un usuario por id 
exports.obtenerUsuarioPorId = async(req,res)=>{
const {id} = req.params;
try {
    const usuario = await Usuario.findByPk(id)
    if (usuario == null) {
        res.status(404).json({
            estado:0,
            mensaje: "Usuario no encontrado"
        })
    } else{
        res.status(200).json({
            estado:1,
            mensaje: "Usuario encontrado",
            usuario: usuario
        })

    }
} catch (error) {
    res.status(500).json({
        estado:0,
        mensaje:"Ocurrio un error desconocido"
    })
}
}
//crear un usuario 
exports.crearUsuario = async(req,res)=>{
const {nombre, user, email, clave} = req.body;
try{
    if(nombre == undefined||user == undefined||email == undefined||clave == undefined){
        res.status(400).json({
            estado:0,
            mensaje: "Bad Request - Faltan parametros"
        }) 
    }else{
        const usuario = await Usuario.create({nombre:nombre, user:user, email:email, clave:clave});
        res.status(200).json({
            estado: 1,
            mensaje: "Usuario creado correctamente",
            usuario: usuario
        })
        }
    }

 catch (error){
res.status(500).json({
    estado:0,
    mensaje: "Ocurrio un error desconocido"
})
}
}
//Actualizar usuario 
exports.actualizarUsuario = async(req,res)=>{
    //Buscamos el usuario
    const{id} = req.params;
    const {nombre, user, email, clave} = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario == null ) {
            res.status(404).json({
                estado:0,
                mensaje:"Usuario no encontrado"
            })
        } else {
            if (nombre == undefined||user == undefined||email == undefined||clave == undefined) {
                res.status(400).json({
                    estado:0,
                    mensaje:"Faltan parametros"
                })
            }else{
    await usuario.update({nombre:nombre, user:user, email:email, clave:clave})
    res.status(200).json({
        estado:1,
        mensaje:"Usuario actualizada con exito"
    })
            }
        }
    } catch (error) {
        res.status(500).json({
            estado:0,
            mensaje:"Ocurrio un error desconocido"
        })
    }
    //Actualizamos
    //Guardamos


}
//Eliminar usuario
exports.eliminarUsuario = async(req,res)=>{
const {id} = req.params
try {
    const usuario = await Usuario.findByPk(id);
    if (usuario == null) {
        res.status(400).json({
            estado:0,
            mensaje:"Usuario no encontrada"
        })
    } else {
        await usuario.destroy();
        res.status(200).json({
            estado:1,
            mensaje:"Usuario eliminada con exito"
        })
    }
} catch (error) {
    res.status(500).json({
        estado:0,
        mensaje:"Ocurrio un error desconocido"
    })
}
}


