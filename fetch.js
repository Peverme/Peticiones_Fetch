//Función para consultar datos
function fetchDatos (){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(responSe => response.json())
    .then(json =>{
        for(let i=0; i<json.results.length; i++){
            addPoke(json.results[i], i+1);
        }
    })
    .catch(err => console.log("Solicitud fallida", err));
}

const itemsContainer = document.getElementById("pokemon");

//Función para inyectar datos en el HTML(DOM)

function addPoke(pokemon, index){
    const inyectarHTML ='<div class="col-lg-2"' +
    '<ul>'+ '<li>'+ '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ index +".png>"'
    + 'pokemon.name' + 
    '</li>'+
    '</ul>'
    '</div>'

    itemsContainer.innerHtml+=inyectarHTML;
}