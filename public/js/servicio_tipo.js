'use strict',
function registroTipo(pTipo){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registroTipo',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            tipo : pTipo[0],
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}