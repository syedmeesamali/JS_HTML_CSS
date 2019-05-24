var http = require('http');
var fs = require('fs');

function onRequest(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.write('Hello World');
    //response.end();
    
    fs.readFile('/hello.txt', (error, data) =>
    {
        if(error)
        {
            response.writeHead(404);
            response.write('File Not Found');
        } else
        {
            response.write(data);
        }
        response.end;
    }); 
}

http.createServer(onRequest).listen(8000);