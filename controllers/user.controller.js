let { User } = require("../models");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
let Helper = require("../helpers/index");
let Id = require("../helpers/uuid-int");

class UserController {
  static async login(req, res, next) {
    try {
      let { username, password } = req.body;
      let validate = Helper.validateInputLogin({ username, password });
      if (validate) {
        throw { name: "validator", msg: validate };
      }
      let findedUser = await User.findOne({ where: { username } });
      if (!findedUser) {
        throw { name: "Forbidden" };
      }
      let comparePassword = bcrypt.compareSync(password, findedUser.password);
      if (!comparePassword) {
        throw { name: "Forbidden" };
      }
      //create jsonwebtoken
      let token = jwt.sign({ id: findedUser.id }, process.env.TOKEN_SECRET);
      res.json({
        access_token: token,
        super_admin: findedUser.super_admin,
        admin: findedUser.admin,
      });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      let { username, password, super_admin } = req.body;
      let id = Id.generator();

      let departement_id = Helper.validateInputDepartementId(
        req.body.departement_id
      );
      let admin = Helper.validateInputAdminId(req.body.admin);
      //create new user
      await User.create({
        id,
        username,
        password,
        departement_id,
        super_admin,
        admin,
      });

      res.status(201).json({ message: "Success create user" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = UserController;
