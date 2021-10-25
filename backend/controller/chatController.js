const Model = require('../models/chats');

const registerChat = async (req, res) => {
    const { user, messages } = req.body;
    const user = await Model.registerUser(user, messages);

    res.status(201).json({ message: 'Mensagem Registrada com sucesso!', user, messageChat });
};

const getChatMessages = async (req, res) => {
  const { user } = req.body;
  const chat = await Model.findChats(user);

  res.status(200).json({ user: chat.user, message: chat.message });
};

module.exports = {registerChat, getChatMessages}