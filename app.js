var express  = require('express');
var path  = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port=8080;

app.use(express.static(path.join(__dirname,"public")));

io.on('connection', function(client){
   console.log('new connection made');
   client.emit('message-from-server',{
       greeting:'Hello from Server'
   });

   client.on('message-from-client',function(msg){
       console.log( msg.greeting);
   });
});

server.listen(port,function(){
    console.log('Listening on port ' + port);
})