'use strict';

//Sobre Registro entrenador
function obtenerListaEntrenadores(){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listaEntrenador',
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

function registroEntrenador(pEntrenador){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registroEntrenador',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            numero_entrenador : pEntrenador[0],
            nombre_entrenador : pEntrenador[1],
            edad : pEntrenador[2],
            sexo : pEntrenador[3],
            foto_entrenador : pEntrenador[4],
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}