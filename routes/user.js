var express = require('express');
var router = express.Router();
let controller = require("../controllers/userController")
let { validateInputRegisterUser, validateInputLoginUser } = require("../middlewares/validator")

router.post("/login", validateInputLoginUser, controller.login)
.post("/register", validateInputRegisterUser, controller.register)
 

module.exports = router;
