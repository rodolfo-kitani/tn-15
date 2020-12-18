//importa { createServer} from 'http';
//import htto from 'http';
const http = require('http');
const port = 8080;
const ip = 'localhost';

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
    console.log(request.url)
    if(request.url === "/produtos") {
        getProdutos(response)
    }else if(request.url === "/") {
        defaultRoute(response)
    }else {
        getError (response)
    }
}).listen(port, ip);

function getError(response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Erro")    
}

function getProdutos(response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Produtos")    
}

function defaultRoute(response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Bem vindo!")
}