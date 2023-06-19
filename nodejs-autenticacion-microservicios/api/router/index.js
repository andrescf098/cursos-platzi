const express = require("express");
const user = require("../components/user/network");
const auth = require("../components/auth/network");
const post = require("../components/post/network");

const router = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/user", user);
  router.use("/auth", auth);
  router.use("/post", post);
};

module.exports = router;
