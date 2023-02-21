var express = require('express');
var router = express.Router();
let controller = require("../controllers/ticketController.js")

router.get("/", controller.getAllTicket)
.post('/', controller.createTicket);

module.exports = router;
