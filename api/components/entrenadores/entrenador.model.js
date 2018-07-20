'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    numero_entrenador : {type : Number, unique : true, required : true},
    nombre_entrenador : {type : String, required: true},
    edad : {type : String, required: true},
    sexo : {type : String, required: true},
    foto_entrenador : {type : String, required : true},
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);