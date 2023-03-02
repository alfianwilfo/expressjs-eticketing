let { Queue, Departement } = require("../models/index");
let { Op } = require("sequelize");
let Pagination = require("../helpers/pagination");
let Helper = require("../helpers/index");
class TicketController {
  static async createTicket(req, res, next) {
    try {
      let { username, from } = req.user;
      let { message, to } = req.body;
      // check length message
      let checkLength = Helper.quantifyLength(message);
      if (checkLength) {
        throw { name: "validator", status: 400, msg: checkLength };
      }
      let findDepartement = await Departement.findOne({ where: { id: to } });
      await Queue.create({ username, message, from, to: findDepartement.name });
      res.status(201).json({ message: "Success create new ticket" });
    } catch (error) {
      next(error);
    }
  }

  static async getAllTicket(req, res, next) {
    try {
      console.log("MASUK KESINI");
      //filter by name, bymessage, by departement, by status, by requester
      let { to, from, username, status, offset: page } = req.query;
      const { limit, offset } = Pagination.getPagination(page, 10);
      let config = { where: {}, limit, offset, order: [["id", "DESC"]] };
      if (to) {
        config.where.to = to;
      }
      if (from) {
        config.where.from = from;
      }
      if (username) {
        config.where.username = { [Op.substring]: `${username}` };
      }
      if (status) {
        config.where.status = status;
      }
      let allTicket = await Queue.findAndCountAll(config);
      const response = Pagination.getPagingData(allTicket, page, limit);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatusTicket(req, res, next) {
    try {
      let { status } = req.body;
      let id = +req.params.id;
      let updateStatusTicket = await Queue.update(
        { status },
        { where: { id } }
      );
      res.json({ message: "Success update status" });
    } catch (error) {
      next(error);
    }
  }

  static async getAllMyRequest(req, res, next) {
    try {
      let { offset: page } = req.query;
      let { username } = req.user;
      const { limit, offset } = Pagination.getPagination(page, 10);
      let findedTicket = await Queue.findAndCountAll({
        limit,
        offset,
        where: { username },
        order: [["id", "DESC"]],
      });
      const response = Pagination.getPagingData(findedTicket, page, limit);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getDetail(req, res, next) {
    try {
      let { id } = req.params;
      let findedTicket = await Queue.findOne({ where: { id } });
      res.json(findedTicket);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TicketController;
