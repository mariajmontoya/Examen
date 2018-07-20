'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    pokedex : {type : Number, unique : true, required : true},
    pokemon : {type : String, unique : true, required: true},
    tipo : {type : String, required: true},
    foto : {type : String, required: true},
});

module.exports = mongoose.model('Pokemon', pokemonSchema);