'use strict'

/*Sobre registro/listar/filtrar del pokemon*/

let botonregistro = document.querySelector('#btnregistro_pokemon');

botonregistro.addEventListener('click' , obtenerDatos);

let inputpokedex = document.querySelector('#txtpokedex');
let inputpokemon = document.querySelector('#txtpokemon');
let inputtipo = document.querySelector('#txttipo');



function obtenerDatos(){
    let infopokemon =[];
    let bError = false;

    
    let spokedex = Number(inputpokedex.value);
    let spokemon = inputpokemon.value;
    let stipo = inputtipo.value;
    let simagen = imagenUrl;
   
    

    infopokemon.push(spokedex, spokemon, stipo, simagen);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el pokemon',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo registrar el pokemon');
    }else{
        registroPokemon(infopokemon);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El pokemon se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
    
        limpiarFormulario();
    }
    
}

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación pokedex
    if(inputpokedex.value == '' || (regexSoloNumeros.test(inputpokedex.value)==false) ){
        inputpokedex.classList.add('error-input');
        bError = true;
    }else{
        inputpokedex.classList.remove('error-input');
    }
    //Validación pokemon
    if(inputpokemon.value == ''){
        inputpokemon.classList.add('error-input');
        bError = true;
    }else{
        inputpokemon.classList.remove('error-input');
    }
     //Validación tipo
     if(inputtipo.value == ''){
        inputtipo.classList.add('error-input');
        bError = true;
    }else{
        inputtipo.classList.remove('error-input');
    }
     
    
    return bError;
}

function limpiarFormulario(){
    inputpokedex.value = '';    
    inputpokemon.value = '';
    inputtipo.value = '';
}

//filtrar
function FiltrarListaPokemones (){

    let criterioBuscar = inputBuscar.value.toUpperCase();
    let filaspokemones = tblpokemones.getElementsByTagName('tbody');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filaspokemones.length; i++) {    
        datosFila = filaspokemones[i];
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


function imprimirListaPokemones () {
    let listaPokemones = obtenerlistaPokemones();
    let tbody = document.querySelector('#tblpokemones tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemones.length; i++){
        let fila = tbody.insertRow();

        if(listaPokemones[i]['desactivado']){
            continue;
        } else { 

        let spokedex = fila.insertCell();
        let spokemon = fila.insertCell();
        let stipo = fila.insertCell();
      
        

        spokedex.innerHTML = listaPokemones[i]['pokedex'];
        spokemon.innerHTML = listaPokemones[i]['pokemon'];
        stipo.innerHTML = listaPokemones[i]['tipo'];
   
       

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
  
   $('#gradient1').css({
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
