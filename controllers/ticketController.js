let { Queue } = require("../models/index")
class TicketController {
   static async createTicket(req,res,next){
        try {
            let {name, message, departement} = req.body
            console.log(name, message, departement);
            let createTicket = await Queue.create({name, message, departement})
            console.log(createTicket);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TicketController