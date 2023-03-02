var express = require("express");
var router = express.Router();
let controller = require("../controllers/departement.controller");
let authentication = require("../middlewares/authentication");

router
  .get("/", authentication, controller.getAllDepartement)
  .post("/", controller.createDepartement);

module.exports = router;
