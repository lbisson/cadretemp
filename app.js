/**
 * Entry point for CADRE
 * @module app
 */

// set color themes for application cli output
let colors = require('colors');
colors.setTheme({
  warn: 'yellow',
  error: 'red'
});

// warn if dependencies are out of date
let output = require('check-dependencies').sync();
if (!output.depsWereOk) {
  console.warn(('📦  Dependencies are out of date! You may need to run npm i').warn.bold);
}

// init server
let app;
let reload = require('reload');
let WebSocket = require('ws');
let WebSocketServer = require('ws').Server;

app = require('roosevelt')({
    onServerInit: function(application) {
      if (process.env.NODE_ENV === 'development') {
        reloadReturned = reload(application, { webSocketServerWaitStart: true }); // On default port 9856
      }
  
      let server = application.httpServer;
      wss = new WebSocketServer({ server: server });
  
      wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
          wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(message);
            }
          });
        });
      });
  
      wss.broadcast = function(data) {
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
      };

    },
  
    onServerStart: function(application) {
      if (process.env.NODE_ENV === 'development') {
        reloadReturned.startWebSocketServer();
      }
    }
  });

app.startServer();
