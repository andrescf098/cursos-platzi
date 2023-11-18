const { createServer } = require("http");
const { Server } = require("socket.io");
const ioc = require("socket.io-client");

describe("Testing Socket.io", () => {
  let io, serverSocket, clientSocket;
  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = ioc(`http://localhost:${port}`);
      io.on("connect", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });
  afterAll(() => {
    io.close();
    clientSocket.close();
  });
  test("Test event", (done) => {
    clientSocket.on("greeting", (greet) => {
      try {
        expect(greet).toBe("Holi");
        done();
      } catch (error) {
        done(error);
      }
    });
    serverSocket.emit("greeting", "Holi");
  });
  test("Testing callbacks (acknowledgements)", (done) => {
    serverSocket.on("bark", (callback) => {
      callback("woof!");
    });
    clientSocket.emit("bark", (arg) => {
      try {
        expect(arg).toBe("woof!");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
