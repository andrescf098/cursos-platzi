const socket = io({
  auth: {
    token: "123456",
  },
});
socket.on("connect_error", (err) => {
  if (err.message === "not authorized") {
    console.log(err.message);
  }
});
