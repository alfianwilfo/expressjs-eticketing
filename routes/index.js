var express = require('express');
var router = express.Router();
let ticketsRoute  = require("./tickets")
let usersRoute = require("./user")

router.use('/tickets', ticketsRoute)
.use("/users", usersRoute);

module.exports = router;
