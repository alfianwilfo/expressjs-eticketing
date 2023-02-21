var express = require('express');
var router = express.Router();
let controller = require("../controllers/ticketController.js")
let { validateInput } = require("../middlewares/validator")

router.get("/", controller.getAllTicket)
.post('/', validateInput, controller.createTicket)
.patch("/:id", controller.updateStatusTicket)

module.exports = router;
