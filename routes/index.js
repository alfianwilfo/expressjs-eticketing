var express = require('express');
var router = express.Router();
let ticketsRoute  = require("./tickets")

router.use('/tickets', ticketsRoute);

module.exports = router;
