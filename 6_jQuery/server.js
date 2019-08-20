const http = require('http');
//creating an http server
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected now");
})

const wss = new websocket.server({ server });
wss.on('headers', (headers, req) => {
    console.log(headers);
})

//Listen at port 8000
server.listen(8000);