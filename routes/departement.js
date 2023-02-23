var express = require('express');
var router = express.Router();
let controller = require("../controllers/departementController")

router.get("/", controller.getAllDepartement)


module.exports = router