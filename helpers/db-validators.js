const Role = require('../models/role');
const Usuario = require('../models/usuario')

const esRoleValido = async(rol = '') => {

    const existeRole = await Role.findOne({ rol });
    if ( !existeRole ) {
        throw new Error(`El rol ${ rol } no esá registrado en la base de BD`);
    }
}

const emailExiste = async(correo = '') => {
    // Verificar si el correo existe 
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo } ya esta registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {
    
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El usaurio con el id ${ id } no existe en la base de datos`)
    }
}
module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}