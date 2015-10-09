var WebSocketServer = require('ws').Server;
var socketServer = new WebSocketServer({port:9000});
socketServer.on('connection',function(websocket){
    websocket.on('message',function(message){
       console.log(new Date().getTime(),' received ',message) 
       websocket.send('###' + message + "###")
    });
})