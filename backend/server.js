const express = require('express');
const routes = require('./router');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());

app.use('/', cors(corsOptions), routes);

io.on('connection', (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  // socket.emit('previuosMessages', messages);

  // socket.on('sendMessage', data => {
  //   messages.push(data)
  //   console.log(data);
  //   socket.broadcast.emit('recivedMessage', data)
  // })
})

server.listen(3000, () => {
  console.log('Servidor online!');
  console.log('http://localhost:3000/depoimentos');
});