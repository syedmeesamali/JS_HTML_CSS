var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url);
    if (req.url === '/Home' || req.url === '/')
    {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log("Server working now");
