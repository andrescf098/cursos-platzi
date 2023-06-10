const express = require("express");
const response = require("../../components/network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/:userId", (req, res) => {
  controller
    .listChats(req.params.userId)
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});
router.post("/", (req, res) => {
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Información invalida",
        400,
        "Error en el controlador"
      );
    });
});

module.exports = router;
