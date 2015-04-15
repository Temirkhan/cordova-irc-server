/*jslint node:true*/
'use strict';

// Read port as the first parameters of the command line.
var WebSocketServer = require('ws').Server,
    argv = require('yargs')
        .usage('Usage: $0 -port [num]')
        .default('port', 8080, 'Port on which server would be listening')
        .argv,
    wss;

var port = argv.port || 8080;
wss = new WebSocketServer({ port: port });
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('< %s', message);
        wss.clients.forEach(function each(client) {
            // Send message back to the 
            // all connected clients
            console.log("> %s to client", message);
            client.send(message);
        });

    });

    ws.send('Client connected to the server.');
});
console.log('IRC server started on port ' + port + '.');
