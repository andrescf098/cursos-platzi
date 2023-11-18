module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("message", (message) => {
      io.emit("message", {
        username: socket.handshake.headers.cookie.split("=").pop(),
        message,
      });
    });
  });
};
