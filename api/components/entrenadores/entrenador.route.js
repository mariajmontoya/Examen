'use strict';
const express = require('express');
const router = express.Router();
const entrenador = require('./entrenador.api');


router.route('/registroEntrenador')
    .post(function(req, res){
    entrenador.registroEntrenador(req, res);
});

router.route('/listaEntrenador')
    .get(function(req, res){
    entrenador.listaEntrenador(req, res);
});

router.route('/buscarEntrenador')
    .get(function(req, res){
    entrenador.buscarEntrenador(req, res);
});

module.exports = router;