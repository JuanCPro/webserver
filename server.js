const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Servicio
/*app.get('/', function(req, res) {
    let salida = {
        nombre: 'Juan',
        edad: '22',
        url: req.url
    };

    res.send(salida);
})*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto  ${port}`)
})