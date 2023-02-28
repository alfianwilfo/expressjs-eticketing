let { Departement } = require("../models/")
class DepartementController {
    static async getAllDepartement(req, res, next){
        try {
            let departements = await Departement.findAll()
            res.json(departements)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = DepartementController

