const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");
const PORT = 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

// io.on("connection", (socket) => {
// -- CIRCLE
// socket.on("circle position", (data) => {
//   socket.broadcast.emit("move circle", data);
// });
// socket.connectedRoom = "";

// -- ROOMS --

// socket.on("connect to room", (room) => {
//   socket.leave(socket.connectedRoom);

//   switch (room) {
//     case "room1":
//       socket.join("room1");
//       socket.connectedRoom = "room1";
//       break;

//     case "room2":
//       socket.join("room2");
//       socket.connectedRoom = "room2";
//       break;

//     case "room3":
//       socket.join("room3");
//       socket.connectedRoom = "room3";
//       break;
//   }

// });

// socket.on("message", (message) => {
//   const room = socket.connectedRoom;

//   io.to(room).emit("send message", {
//     message,
//     room,
//   });
// });
// });
const teachers = io.of("/teachers");
const students = io.of("/students");
teachers.on("connection", (socket) => {
  console.log(socket.id + "se ha conectado a la sala de profesores");
  socket.on("send message", (data) => {
    teachers.emit("message", data);
  });
});
students.on("connection", (socket) => {
  console.log(socket.id + "se ha conectado a la sala de alumnos ");
  socket.on("send message", (data) => {
    students.emit("message", data);
  });
});
httpServer.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto: " + PORT);
});
