const connect = require('./connection');

const registerChat = async (user, messages) => {
  const db = await connect();
  const userCreated = await db.collection('messages').insertOne({ users, messages });
  console.log('🚀 ~ file: chats.js ~ line 6 ~ registerChat ~ userCreated', userCreated);
  return userCreated;
}

const findChats = async (user) => {
  const db = await connect();
  const userData = await db.collection('messages').findOne({ user });
  return userData;
}

module.exports = { registerChat, findChats };
