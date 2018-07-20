'use strict'

/*Sobre registro/listar/filtrar del entrenador*/

let botonregistro = document.querySelector('#btnregistro_entrenador');

botonregistro.addEventListener('click' , obtenerDatos);

let inputnumero_entrenador = document.querySelector('#txtnumero_entrenador');
let inputnombre_entrenador = document.querySelector('#txtnombre_entrenador');
let inputedad = document.querySelector('#txtedad');
let inputsexo = document.querySelector('#textsexo');
let inputfoto_entrenador = document.querySelector('#textfoto_entrenador');



function obtenerDatos(){
    let infoentrenador =[];
    let bError = false;

    
    let snumero_entrenador= Number(inputnumero_entrenador.value);
    let snombre_entrenador = inputnombre_entrenador.value;
    let sedad = inputedad.value;
    let ssexo = inputsexo.value;
    let sfoto_entrenador = inputfoto_entrenador.value;
    

    infoentrenador.push(snumero_entrenador, snombre_entrenador, sedad, ssexo, sfoto_entrenador);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el entrenador',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el entrenador');
    }else{
        registroEntrenador(infoentrenador);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El entrenador se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
    
        limpiarFormulario();
    }
    
}

function imprimirListaEntrenadores () {
    let listaEntrenadores = obtenerlistaEntrenadores();
    let tbody = document.querySelector('#tblentrenadores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenadores.length; i++){
        let fila = tbody.insertRow();

        if(listaEntrenadores[i]['desactivado']){
            continue;
        } else { 

        let snumero_entrenador = fila.insertCell();
        let snombre_entrenador = fila.insertCell();
        let sedad = fila.insertCell();
        let ssexo = fila.insertCell();
        let sfoto_entrenador = fila.insertCell();
        

        snumero_entrenador.innerHTML = listaEntrenadores[i]['numero_entrenador'];
        snombre_entrenador.innerHTML = listaEntrenadores[i]['nombre_entrenador'];
        sedad.innerHTML = listaEntrenadores[i]['edad'];
        ssexo.innerHTML = listaEntrenadores[i]['sexo'];
        sfoto_entrenador.innerHTML = listaEntrenadores[i]['foto_entrenador'];
       

    }
}

};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación numero entrenador
    if(inputnumero_entrenador.value == '' || (regexSoloNumeros.test(inputnumero_entrenador.value)==false) ){
        inputnumero_entrenador.classList.add('error-input');
        bError = true;
    }else{
        inputnumero_entrenador.classList.remove('error-input');
    }
    //Validación nombre entrenador
    if(inputnombre_entrenador.value == ''){
        inputnombre_entrenador.classList.add('error-input');
        bError = true;
    }else{
        inputnombre_entrenador.classList.remove('error-input');
    }
     //Validación edad
     if(inputedad.value == '' || (regexSoloNumeros.test(inputnumero_entrenador.value)==false) ){
        inputedad.classList.add('error-input');
        bError = true;
    }else{
        inputedad.classList.remove('error-input');
    }
     //Validación sexo
     if(inputsexo.value == ''){
        inputsexo.classList.add('error-input');
        bError = true;
    }else{
        inputsexo.classList.remove('error-input');
    }

    //Validación foto
    if(inputfoto_entrenador.value == ''){
        inputfoto_entrenador.classList.add('error-input');
        bError = true;
    }else{
        inputfoto_entrenador.classList.remove('error-input');
    }
    
    return bError;
}

function limpiarFormulario(){
    inputnumero_entrenador.value = '';    
    inputnombre_entrenador.value = '';
    inputedad.value = '';
    inputsexo.value = '';
    inputfoto_entrenador.value = '';
}

//filtrar entrenador
function FiltrarListaEntrenadores (){

    let criterioBuscar = inputBuscar.value.toUpperCase();
    let filasentrenadores = tblentrenadores.getElementsByTagName('tbody');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasentrenadores.length; i++) {    
        datosFila = filasentrenadores[i];
        datos = datosFila.getElementsByTagName('tbody');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBuscar)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};



var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);
