'use strict';

//Sobre Registro pokemon
function obtenerListaPokemones(){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarPokemones',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return lista;
}

function registroPokemon(pPokemon){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registroPokemon',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            pokedex : pPokemon[0],
            pokemon : pPokemon[1],
            tipo : pPokemon[2],
            foto : pPokemon[3],
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}