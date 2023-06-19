const express = require("express");
const response = require("../../../network/response");
const controller = require("./index");

const router = express.Router();

router.post("/", upsert);
router.put("/", upsert);
router.get("/", async (req, res) => {
  try {
    const lista = await controller.list();
    return response.success(req, res, lista, 200);
  } catch (error) {
    return response.error(req, res, error.message, 500);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await controller.get(req.params.id);
    return response.success(req, res, user, 200);
  } catch (error) {
    return response.error(req, res, error.message, 500);
  }
});

function upsert(req, res) {
  controller
    .upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

module.exports = router;
