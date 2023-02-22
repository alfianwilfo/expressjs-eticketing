let { User } = require("../models/")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

class UserController {
    static async login(req, res, next){
        try {
        let { username, password } = req.body
        let findedUser = await User.findOne({ where: { username } })
        if (!findedUser) {
            throw { name: 'Forbidden'}
        }
        let comparePassword = bcrypt.compareSync(password, findedUser.password);
        if (!comparePassword) {
            throw { name: 'Forbidden'}
        }
        let token = jwt.sign({id: findedUser.id}, process.env.TOKEN_SECRET)
        res.json({ access_token: token, admin: findedUser.admin })
        } catch (error) {
            next(error)
        }
    }
    
    static async register(req, res, next){
        try {
            let { username, password, departement, admin } = req.body
            let createdUser = await User.create( { username, password, departement, admin } )
            res.status(201).json( { message: 'Success create user'} )
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController