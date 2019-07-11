var http = require('http');
const url = require('url');
const { worker } = require('worker_threads');
const primes = require('./primes');


const server = http.createServer(function(request, response){
  const{ pathname, query } = url.parse(request.url, true);
  if (pathname === '/primes') {  
    const worker = new Worker('./primes_worker.js', {workerData: { n:query.n || 0} });
    
  worker.on('error', function() {
      response.statusCode = 500;
      response.write('OOpss there was an error.....');
      response.end();
    });

    let result;
    worker.on('message', function (message) {
      result = message;
    });

    worker.on('exit', function() {
      response.setHeader('Content-type', 'application/json');
      response.write(JSON.stringify(result));
      response.end();
    });
  }
    else {
      response.statusCode = 404;
      response.write('Not Found');
      response.end();
    }
});

server.listen(8080);