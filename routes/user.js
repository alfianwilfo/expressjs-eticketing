var express = require('express');
var router = express.Router();
let controller = require("../controllers/userController")

router.post("/login", controller.login)
.post("/register", controller.register)
 

module.exports = router;
