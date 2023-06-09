const express = require("express");
const message = require("../message/network");
const user = require("../user/network");
const chat = require("../chat/network");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/message", message);
  router.use("/user", user);
  router.use("/chat", chat);
}

module.exports = routerApi;
