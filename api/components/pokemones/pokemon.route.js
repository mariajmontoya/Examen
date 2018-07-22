'use strict';
const express = require('express');
const router = express.Router();
const pokemon = require('./pokemon.api');


router.route('/registroPokemon')
    .post(function(req, res){
    pokemon.registroPokemon(req, res);
});

router.route('/listaPokemon')
    .get(function(req, res){
    pokemon.listaPokemon(req, res);
});

router.route('/buscarPokemon')
    .get(function(req, res){
    pokemon.buscarPokemon(req, res);
});

router.route('/agregarfoto')
.post(function(req, res){
    pokemon.agregarfoto(req, res);
});

module.exports = router;