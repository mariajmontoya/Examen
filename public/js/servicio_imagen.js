let imagenUrl = '';
$(function() {

    $.cloudinary.config({ cloud_name: 'dspuap7va', api_key: '197862372221396'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'dspuap7va', upload_preset: 'examen_pokemon', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'http://res.cloudinary.com/dspuap7va/image/upload/' + id;
            //https://res-console.cloudinary.com/dspuap7va/thumbnails/v1/image/upload/v1532229609/ZGNxdWIwY3N4aHY5NW15bG9sY2k=/grid
            //https://res-console.cloudinary.com/dspuap7va/thumbnails/v1/image/upload/v1532232968/d3R1dHZzZXBoNjc3c3BzbWp1d3Y=/grid
            imagenUrl = processImage(id);
            console.log(imagenUrl);
            //document.querySelector('#txtImagen').src = imagenUrl;
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}
