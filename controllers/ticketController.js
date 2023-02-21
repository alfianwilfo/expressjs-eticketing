let { Queue } = require("../models/index")
class TicketController {
   static async createTicket(req, res, next){
        try {
            let {name, message, departement} = req.body
            let createTicket = await Queue.create({name, message, departement})
            res.status(201).json({message : 'Success create new ticket'})
        } catch (error) {
           next(error)
        }
    }

    static async getAllTicket(req, res, next){
        try {
            let allTicket = await Queue.findAll()
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
}

module.exports = TicketController