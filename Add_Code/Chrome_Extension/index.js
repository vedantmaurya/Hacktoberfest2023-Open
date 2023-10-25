const http = require('http');
const express = require("express");
const {Server} = require('socket.io');
const path = require('path')


const app = express();
const server = http.createServer(app);
const io = new Server(server);

//socket.io
io.on("connection", (socket) =>{
    socket.on("user-message", message =>{
        console.log("A new User Message", message);
        io.emit("message",message)
    })

})


app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'public/hello.html'));
  });
  

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

