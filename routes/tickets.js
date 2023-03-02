var express = require("express");
var router = express.Router();
let controller = require("../controllers/ticket.controller");
let { validatorPatchInput } = require("../middlewares/validator");
let authen = require("../middlewares/authentication");

router
  .get("/", controller.getAllTicket)
  .get("/my-request", authen, controller.getAllMyRequest)
  .post("/", authen, controller.createTicket)
  .patch("/:id", validatorPatchInput, controller.updateStatusTicket)
  .get("/:id", authen, controller.getDetail);

module.exports = router;
