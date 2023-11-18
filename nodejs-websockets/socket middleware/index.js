process.env.DEBUG = "engine, socket.io:socket";
const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const PORT = 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

instrument(io, {
  auth: false,
});

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token == "123456") {
    next();
  } else {
    const err = new Error("not authorized");
    err.data = {
      details: "No pudiste ser autenticado",
    };
    next(err);
  }
});
io.on("connection", (socket) => {
  console.log(socket.id);
});
httpServer.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto: " + PORT);
});
