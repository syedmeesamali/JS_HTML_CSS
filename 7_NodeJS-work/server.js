var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url);
    if (req.url === '/Home' || req.url === '/')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.url === '/contact') 
    {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream('./contact.html').pipe(res);
    } else if (req.url === '/api/ninjas') 
    {
        var ninjas = [{name: 'Syed Meesam', age: 33}, {name: 'Rabbit', age: 28}];
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else 
    {
        res.writeHead(404, {'content-type': 'text/html'});
        fs.createReadStream('./404.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log("Server working now");
