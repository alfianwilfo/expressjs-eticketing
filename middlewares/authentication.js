let { User } = require("../models/")
let jwt = require("jsonwebtoken")
let authen = async (req, res, next) => {
    try {
        let { access_token } = req.headers
        var decoded = jwt.verify(access_token, process.env.TOKEN_SECRET);
        let findedUser = await User.findOne({where: {id: decoded.id}})
        if (!findedUser) {
            throw { name: 'unauthorized' }
        }
        req.user = {username: findedUser.username, departement: findedUser.departement }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = authen