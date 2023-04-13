
let contenido = document.getElementById("contenido");

fetch('https://studio-ghibli-films-api.herokuapp.com/api/ponyo')
    .then(response => response.json())
    .then(resp => {
        crearCard(resp)
    });

    function crearCard(resp) {
            contenido.innerHTML +=
            `
            <div class="card mx-auto" style="width: 18rem;">
            <img class="card-img-top" src="${resp.poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title ">${resp.title}</h5>
                <p class="card-text ">${resp.synopsis}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Titulo Romanizado</strong>: ${resp.hepburn}</li>
                <li class="list-group-item"><strong>Año de Estreno</strong>: ${resp.release}</li>
                <li class="list-group-item"><strong>Director</strong>: ${resp.director}</li>
            </ul>
            <div class="card-body">
            <button type="button" class="btn btn-primary">Mas informacion</button>
                
            
            </div>
        </div>
            `
        }
        

            
        

    ;