let { User } = require("../models/")
class UserController {
    static async login(req, res, next){
        try {
        } catch (error) {
            next(error)
        }
    }
    
    static async register(req, res, next){
        try {
            let { username, password, departement } = req.body
            let createdUser = await User.create( { username, password, departement } )
            res.status(201).json( { message: 'Success create user'} )
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController