'use srticit';

// variables globales----------------------------------------
const criterioBuscar = document.querySelector('#criterioBuscar');
const tblpokemones = document.querySelector('#tblpokemones');

//listeners--------------------------------------------------
//criterioBuscar.addEventListener('keyup' , function(){FiltrarlistaPokemones()});

//loads------------------------------------------------------
//window.onload = function(){
    //listaPokemones();
//};

function listaPokemones(){
    let listaPokemones = obtenerlistaPokemones();
    let tbody = document.querySelector('#tblpokemones tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemones.length; i++){
        
        if(listaPokemones[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdapokedex = fila.insertCell();
            let celdapokemon = fila.insertCell();
            let celdatipo = fila.insertCell();
            let celdafoto = fila.insertCell();
            let btns = fila.insertCell();
    

            /*let btnVer = document.createElement('input');
            btnVer.type = 'button';
            btnVer.value = 'Ver';
            btnVer.name = ListaCliente[i]['_id'];
            btnVer.classList.add('btn-list');
            // btnVer.addEventListener('click', ftnMostrarCliente);

            let btnEliminar = document.createElement('input');
            btnEliminar.type = 'button';
            btnEliminar.value = 'Eliminar';
            btnEliminar.name = ListaCliente[i]['_id'];
            btnEliminar.classList.add('btn-list');
            // btnEliminar.addEventListener('click', ftnEliminarProyecto);*/

            celdapokedex.innerHTML = ListaCliente[i]['pokedex'];
            celdapokemon.innerHTML = ListaCliente[i]['pokemon'];
            celdatipo.innerHTML = ListaCliente[i]['tipo'];
            celdafoto.innerHTML = ListaCliente[i]['foto'];
        
            btns.appendChild(btnVer);
            /*btns.appendChild(btnEliminar);*/
        }
    }
}
function imprimirlistaPokemones () {
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
            let sfoto = fila.insertCell();
            let btns = fila.insertCell();
            
    
            spokedex.innerHTML = listaPokemones[i]['pokedex'];
            spokemon.innerHTML = listaPokemones[i]['pokemon'];
            stipo.innerHTML = listaPokemones[i]['tipo'];
            sfoto.innerHTML = listaPokemones[i]['foto'];
        
        }
    }

    

};

function FiltrarlistaPokemones (){

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
