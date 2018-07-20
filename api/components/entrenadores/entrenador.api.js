'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const entrenadorSchema = require('./entrenador.model');

module.exports.registroEntrenador = function(req, res){
    let nuevoEntrenador = new entrenadorSchema({
        numero_entrenador : req.body.numero_entrenador,
        nombre_entrenador : req.body.nombre_entrenador,
        edad : req.body.edad,
        sexo : req.body.sexo,
        foto_entrenador : req.body.foto_entrenador,
    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el entrenador, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El entrenador se registró con éxito'});
        }

    });

};

module.exports.listaEntrenador = function(req, res){
    entrenadorSchema.find().then(
        function(entrenador){
            res.send(entrenador);
        });
};

module.exports.buscarEntrenador = function(req, res){
    entrenadorSchema.find(req.body.idEntrenador).then(
        function(entrenador){
            res.send(entrenador);
        });
};