const express = require('express');
const app = express();

const series = [{ "id": 1, "name": "Friends" }, { "id": 2, "name": "Breaking Bad" }, { "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" } ]

//console.log("1. " + series[1].name)
console.log(series[1])

//console.log(series)

/**app.get('/serie/:id?', (req, res) => {
    let serieId = req.params.id
    res.send(series[serieId].name)

}).listen(3000)**/

app.get('/serie/:id?', (req, res) => {
    let serieId = req.params.id
    let escolhida = series.find(x => x.id === serieId)
    res.send(escolhida)
}).listen(3000)

console.log('Rodando server')






//console.log(series.find(x => x.id === 1).name)

    //console.log('Esse é o serieId ' + serieId)
    //res.send(series[serieId])