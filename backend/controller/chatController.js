const Model = require('../models/chats');

const registerChat = async (req, res) => {
    const { user, message } = req.body;
    const chat = await Model.registerChat(user, message);

    res.status(201).json({ message: 'Mensagem Registrada com sucesso!', chat });
};

const getChatMessages = async (req, res) => {
  const chat = await Model.findChats();

  res.status(200).json(chat);
};

module.exports = {registerChat, getChatMessages}