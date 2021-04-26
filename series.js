// let series = ['Gilmores Girls', 'Supernatural', 'Batman', 'X-Files']
// console.log(series[2])


const series = [ 
    { "id": 1, "name": "Friends" }, 
    { "id": 2, "name": "Breaking Bad" }, 
    { "id": 3, "name": "Dexter" }, 
    { "id": 4, "name": "Six Feet Under" } 
]

let idEscolhido = 3;

function rota() {
    let serieId = idEscolhido;
    let serieEscolhida = {};
    series.forEach(function(serie) {
        if (serie.id === serieId) {
            return serieEscolhida = serie;
        }
    })
    console.log(serieEscolhida)

}

rota();