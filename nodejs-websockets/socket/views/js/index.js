const user = prompt("Escribe tu usuario");
const profes = [
  "Jorge",
  "Javier",
  "Jesús",
  "Joaquín",
  "José",
  "Juan",
  "Julio",
  "Justo",
];

let socketNamespaces, group;

const chat = document.querySelector("#chat");
const namespace = document.querySelector("#namespace");

if (profes.includes(user)) {
  socketNamespaces = io("/teachers");
  group = "profes";
} else {
  socketNamespaces = io("/students");
  group = "alumnos";
}

socketNamespaces.on("connect", () => {
  namespace.textContent = group;
});

const sendMessage = document.querySelector("#sendMessage");
sendMessage.addEventListener("click", () => {
  const message = prompt("Escribe un mensaje: ");
  socketNamespaces.emit("send message", {
    message,
    user,
  });
});
socketNamespaces.on("message", (data) => {
  const { message, user } = data;
  const li = document.createElement("li");
  li.textContent = `${user}: ${message}`;
  chat.append(li);
});
