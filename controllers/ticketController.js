let { Queue, Departement } = require("../models/index")
let { Op } = require("sequelize")
class TicketController {
   static async createTicket(req, res, next){
        try {
            let { username, from } = req.user
            let { message, to } = req.body
            let findDepartement = await Departement.findOne({where: { id: to }})
            let createdTicket = await Queue.create({ username, message, from, to: findDepartement.name })
            res.status(201).json({message : 'Success create new ticket'})
        } catch (error) {
           next(error)
        }
    }

    static async getAllTicket(req, res, next){
        try {
            //filter by name, bymessage, by departement, by status, by requester
            let { to, from, username } = req.query
            let config = { where: {} }
            if (to) {
                config.where.to = to
            }
            if (from) {
                config.where.from = from
            }
            if (username) {
                config.where.username = { [Op.substring]: `${username}`}
            }
            console.log(config);
            let allTicket = await Queue.findAll(config)
            res.json(allTicket)
        } catch (error) {
            next(error)
        }
    }

    static async updateStatusTicket(req, res, next){
        try {
            let { status } = req.body
            let id = +req.params.id
            let updateStatusTicket = await Queue.update({ status }, { where: { id } })
            res.json({message: 'Success update status'})
        } catch (error) {
            next(error)
        }
    }

    static async getAllMyRequest(req, res, next){
        try {
            let { username } = req.user
            let findedTicket = await Queue.findAll({ where: { username } })
            res.json(findedTicket)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TicketController