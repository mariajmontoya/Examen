'use srticit';

// variables globales----------------------------------------
const criterioBuscar = document.querySelector('#criterioBuscar');
const tblentrenadores = document.querySelector('#tblentrenadores');

let inputFiltro = document.querySelector('#inputBuscar');
inputFiltro.addEventListener('change', function () {
    listaEntrenador(inputFiltro.value);
})

//listeners--------------------------------------------------
//criterioBuscar.addEventListener('keyup' , function(){FiltrarlistaPokemones()});

//loads------------------------------------------------------
//window.onload = function(){
    listaEntrenador();
//};

function listaEntrenador(criterioBusqueda){

    let listaEntrenador = obtenerlistaEntrenador();
    let filasentrenador = tblentrenadores.getElementsByTagName('tbody');
    let tbody = document.querySelector('#tblentrenadores tbody');
    tbody.innerHTML = '';

    if (!criterioBusqueda) {
        criterioBusqueda = '';
    }

    for(let i = 0; i < listaEntrenador.length; i++){

        if (listaEntrenador[i]["nombre_entrenador"].toLowerCase().includes(criterioBusqueda.toLowerCase())) {
            let fila = tbody.insertRow();
            let celdanumero_entrenador = fila.insertCell();
            let celdanombre_entrenador = fila.insertCell();
            let celdaedad = fila.insertCell();
            let celdasexo = fila.insertCell();
            let celdafoto_entrenador = fila.insertCell();
          

            celdanumero_entrenador.innerHTML = listaEntrenador[i]['numero_entrenador'];
            celdanombre_entrenador.innerHTML = listaEntrenador[i]['nombre_entrenador'];
            celdaedad.innerHTML = listaEntrenador[i]['edad'];
            celdasexo.innerHTML = listaEntrenador[i]['sexo'];
            
            let imagen = document.createElement("img"); 
               imagen.src = "https://res-console.cloudinary.com/dspuap7va/thumbnails/v1/image/upload/v1532229609/ZGNxdWIwY3N4aHY5NW15bG9sY2k=/grid"; 
               celdafoto_entrenador.appendChild(imagen);
        
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
  
   $('#gradient4').css({
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
