var http = require('http');
const url = require('url');
const primes = require('./primes');


const server = http.createServer(function(request, response){
  const{ pathname, query } = url.parse(request.url, true);
  
    if(pathname == '/primes') {
      const result = primes.nthPrime(query.n || 0);
      response.setHeader('Content-type', 'application/json');
      response.write(JSON.stringify(result));
      response.end();
  } else {
      response.statusCode = 404;
      response.write('NOT FOUND');
      response.end();
  }
});

server.listen(8080);