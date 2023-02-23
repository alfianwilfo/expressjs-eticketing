var express = require('express');
var router = express.Router();
let controller = require("../controllers/departementController")
let authentication = require("../middlewares/authentication")

router.get("/", authentication, controller.getAllDepartement)


module.exports = router