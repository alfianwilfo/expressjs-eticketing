let db = require("../models");
let jwt = require("jsonwebtoken");
let authen = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: "unauthorized" };
    }
    var decoded = jwt.verify(access_token, process.env.TOKEN_SECRET);
    let findedUser = await user.findOne({ where: { id: decoded.id } });
    console.log(findedUser);
    if (!findedUser) {
      throw { name: "unauthorized" };
    }
    req.user = { username: findedUser.username, from: findedUser.departement };
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = authen;
