var express = require('express');
var router = express.Router();
let ticketsRoute  = require("./tickets")
let usersRoute = require("./user")
let departementsRoute = require("./departement")

router.use('/tickets', ticketsRoute)
.use("/users", usersRoute)
.use("/departements", departementsRoute)

module.exports = router;
