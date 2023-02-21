var express = require('express');
var router = express.Router();
let controller = require("../controllers/ticketController.js")

router.post('/', controller.createTicket);

module.exports = router;
