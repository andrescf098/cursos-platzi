const Model = require("./model");

async function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filters) {
  let filter = {};
  for (const key in filters) {
    if (filters[key]) {
      filter[key] = filters[key];
    }
  }
  try {
    const messages = await Model.find(filter).populate("user");
    return messages;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};
