const express = require("express");
const config = require("../config/config");
const router = require("./router/index");
const app = express();
const port = config.port || 3000;
//Router

router(app);

app.listen(port, () => {
  console.log("El servidor esta iniciado en el puerto " + port);
});
