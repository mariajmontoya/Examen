'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const pokemonSchema = require('./pokemon.model');

module.exports.registroPokemon = function(req, res){
    let nuevoPokemon = new pokemonSchema({
        pokedex : req.body.pokedex,
        pokemon : req.body.pokemon,
        tipo : req.body.tipo,
        foto : req.body.foto,
        
    });

    nuevoPokemon.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el pokemon, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El pokemon se registró con éxito'});
        }

    });

};

module.exports.listaPokemon = function(req, res){
    pokemonSchema.find().then(
        function(pokemon){
            res.send(pokemon);
        });
};

module.exports.buscarPokemon = function(req, res){
    pokemonSchema.find(req.body.idPokemon).then(
        function(pokemon){
            res.send(pokemon);
        });
};