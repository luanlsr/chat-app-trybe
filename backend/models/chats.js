const connect = require('./connection');

const registerChat = async (user, message) => {
  const db = await connect();
  const userCreated = await db.collection('messages').insertOne({ user, message });
  return userCreated;
}

const findChats = async () => {
  const db = await connect();
  const userData = await db.collection('messages').find().toArray();
  return userData;
}

module.exports = { registerChat, findChats };
