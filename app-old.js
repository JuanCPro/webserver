const http = require('http');
const { read } = require('fs');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Juan',
            edad: '22',
            url: req.url
        }
        res.write(JSON.stringify(salida))
            //res.write('Hola mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080')