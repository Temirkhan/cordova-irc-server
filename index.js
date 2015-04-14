/*jslint node:true*/
'use strict';
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message);
        wss.clients.forEach(function each(client) {
            // Send message back to the 
            // all connected clients
            console.log("Send " + message + " to client");
            client.send(message);
        });

    });

    ws.send('Client connected to the server.');
});
console.log('IRC server started.');
