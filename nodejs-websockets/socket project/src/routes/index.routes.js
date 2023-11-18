const express = require("express");
const router = express.Router();
const path = require("path");

const viewsPath = path.join(__dirname, "/../views");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", isLoggedIn, (req, res) => {
  res.sendFile(viewsPath + "/index.html");
});
router.get("/register", (req, res) => {
  res.sendFile(viewsPath + "/register.html");
});
module.exports = router;
