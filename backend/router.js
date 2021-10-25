const {registerChat, getChatMessages} = require('../controllers/chatController');
const { Router } = require('express');


const routes = Router();

routes.post('/depoimentos', registerChat); 
routes.get('/depoimentos', getChatMessages); 

module.exports = routes;
