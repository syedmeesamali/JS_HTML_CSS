var http = require('http')
var fs = require('fs')

function onRequest(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile
}