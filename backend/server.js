const express = require('express');
const routes = require('./router');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

const bodyParser = require('body-parser');
const {registerChat} = require('./controller/chatController');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(bodyParser.json());

app.use('/', cors(corsOptions), routes);

io.on('connection', (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  // socket.emit('previuosMessages', messages);

  socket.on('adicionarMensagem', data => {
    app.post('/depoimentos', async (req, res) => {
      const chats = await registerChat(data);
      res.status(201).json(chats);
    })
  })
})

server.listen(3001, () => {
  console.log('Servidor online!');
  console.log('http://localhost:3001/depoimentos');
});