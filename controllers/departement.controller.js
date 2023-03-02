let { departements } = require("../models");
let Helper = require("../helpers/index");
let Id = require("../helpers/uuid-int");
class DepartementController {
  static async getAllDepartement(req, res, next) {
    try {
      let departements = await Departement.findAll();
      res.json(departements);
    } catch (error) {
      next(error);
    }
  }

  static async createDepartement(req, res, next) {
    try {
      let { name } = req.body;
      let id = Id.generator();
      let validate = Helper.validateInputCreateDepartement(name);
      if (validate) {
        throw { name: "validator", msg: validate };
      }
      await departements.create({ name, id });
      res.status(201).json({ message: "Success create new departement" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = DepartementController;
