let { User } = require("../models/")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

class UserController {
    static async login(req, res, next){
        try {
        let { username, password } = req.body
        let findedUser = await User.findOne({ where: { username } })
        console.log(findedUser, "????????");
        if (!findedUser) {
            console.log("masok");
            throw { name: 'Forbidden'}
        }
        let comparePassword = bcrypt.compareSync(password, findedUser.password); 
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