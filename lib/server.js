const http = require('http');

const server = module.exports =  http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch(req.method) {
    case 'GET' :
        res.statusCode = 404;
        res.end('GET method');
        break;
    case 'POST' :
        res.statusCode = 201;
        res.end('POST method');
        break;
    case 'PUT' :
        res.statusCode = 200;
        res.end('PUT method');
        break;
    case 'DELETE' :
        res.statusCode = 403;
        res.end('DELETE method');
        break;
    case 'OPTIONS' :
        res.statusCode = 204;
        res.end();
        break;
    }
});

server.listen(process.env.npm_package_config_port);