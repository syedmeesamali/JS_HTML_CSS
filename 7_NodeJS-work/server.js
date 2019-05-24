var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was: " + req.url);
    res.writeHead(200, {'content-type': 'text/plain'});
    var readStream = fs.createReadStream(_dirname + '/hello.txt', 'utf8');
    readStream.pipe(res);

});

server.listen(3000,'127.0.0.1');
console.log("Server working now");
