const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

async function listChats(userId) {
  let filter = {};
  if (userId) {
    filter = {
      users: userId,
    };
  }
  try {
    const listUsers = await Model.find(filter).populate("users");
    return listUsers;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  add: addChat,
  list: listChats,
};
