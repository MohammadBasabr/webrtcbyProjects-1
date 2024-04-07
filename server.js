const express = require('express'); // server
const http = require('http'); // web server
//
const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 4200;
//
const socketio = require('socket.io');
// serve our static files:
app.use(express.static('public'));
//
httpServer.listen(port, ()=>{
    console.log("server started on port : ", port);
})
//
const io = socketio(httpServer);
io.on('connection', (socket)=>{
    console.log('user connected', socket.id);
}) // if any client connected to the server, we'll take the socket
// and print socket id

// this is the stup in server side.