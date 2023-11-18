const socket = io();

const send = document.querySelector("#send-message");
const allMesagges = document.querySelector("#all-messages");

send.addEventListener("click", () => {
  const message = document.querySelector("#message").value;
  socket.emit("message", message);
  message.value = "";
});
socket.on("message", ({ username, message }) => {
  const msg = document.createRange().createContextualFragment(`
    <div class="message">
      <div class="image-container">
        <img src="" alt="" />
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${username}</span>
          <span class="time">Enviado hace 1min</span>
          <p>${message}</p>
        </div>
      </div>
    </div>
  `);
  allMesagges.appendChild(msg);
});
