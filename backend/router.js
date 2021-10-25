const {registerChat, getChatMessages} = require('./controller/chatController');
const { Router } = require('express');


const routes = Router();

routes.post('/depoimentos', registerChat); 
routes.get('/depoimentos', getChatMessages); 

module.exports = routes;
