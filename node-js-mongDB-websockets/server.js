const express = require("express");
const app = express();
const server = require("http").Server(app);

const cors = require("cors");
const db = require("./db");
const port = process.env.PORT || 3000;
const routerApi = require("./components/network/routerApi");
const socket = require("./socket");

app.use(cors());
app.use(express.json());
socket.connect(server);
routerApi(app);

app.use("/", function (req, res) {
  res.send("Hola");
});
db();
server.listen(port, () => {
  console.log("La apliciación esta escuchando en el puerto " + port);
});
