var express = require('express');
var router = express.Router();
let controller = require("../controllers/ticketController.js")
let { validateInputCreate, validatorPatchInput } = require("../middlewares/validator")

router.get("/", controller.getAllTicket)
.post('/', validateInputCreate, controller.createTicket)
.patch("/:id", validatorPatchInput, controller.updateStatusTicket)

module.exports = router;
