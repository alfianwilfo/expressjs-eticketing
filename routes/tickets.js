var express = require('express');
var router = express.Router();
let controller = require("../controllers/ticketController.js")
let { validateInputCreate, validatorPatchInput } = require("../middlewares/validator")
let authen = require("../middlewares/authentication")

router.get("/", authen, controller.getAllTicket)
.post('/', authen, validateInputCreate, controller.createTicket)
.patch("/:id", validatorPatchInput, controller.updateStatusTicket)

module.exports = router;
