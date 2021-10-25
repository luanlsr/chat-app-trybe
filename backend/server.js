const express = require('express');
const routes = require('./router')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors')

app.use(cors)

app.use(bodyParser.json());

app.use('/', routes);

io.on('connection', (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  // socket.emit('previuosMessages', messages);

  // socket.on('sendMessage', data => {
  //   messages.push(data)
  //   console.log(data);
  //   socket.broadcast.emit('recivedMessage', data)
  // })
})

server.listen(3000, () => {
  console.log('Servidor online!');
  console.log('http://localhost:3000');
});