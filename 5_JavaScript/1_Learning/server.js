const http = require('http');
//creating an http server
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected now");
});

const wss = new websocket.Server({ server });
wss.on('headers', (headers, req) => {
    console.log(headers);
});

//Event connection
wss.on('connection', (ws, req) => {
    ws.send('This is message from server');
    ws.on('message', (msg) => {
        console.log(msg);
    });
});
//Listen at port 8000
server.listen(8000);