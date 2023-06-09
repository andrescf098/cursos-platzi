const express = require("express");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3000;
const routerApi = require("./components/network/routerApi");

app.use(express.json());
routerApi(app);
app.use("/", function (req, res) {
  res.send("Hola");
});
db();
app.listen(port, () => {
  console.log("La apliciación esta escuchando en el puerto " + port);
});
