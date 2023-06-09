const db = require("mongoose");

const { config } = require("./config/config");
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.tt8yiyw.mongodb.net/?retryWrites=true&w=majority`;

db.set("strictQuery", false);
db.Promise = global.Promise;

async function connect() {
  await db.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("[db] conectada");
}
module.exports = connect;
