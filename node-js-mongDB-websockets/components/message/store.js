const Model = require("./model");

async function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}
async function getMessages(filterMessages) {
  let filter = {};
  if (filterMessages !== null) {
    filter = { user: filterMessages };
  }
  const messages = await Model.find(filter);
  return messages;
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
