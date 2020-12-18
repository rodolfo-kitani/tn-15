//importa { createServer} from 'http';
//import htto from 'http';
const http = require('http');
const port = 8080;

console.log('Rodando servidor na porta ' + port);

http.createServer(function (request, response) {
   /* const routes = {
        './produtos' : getProducts,
        './' : getDefault,
        './error' : getError,
    }

    if (request.url in routes) {
        return routes[request.url]
    }
*/
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Meu Servidor")
}).listen(port, 'localhost');