const Jwt = require("../helper/jwt");
const { User } = require('../models/index')

class Authenticate {
  static async token(req, res, next) {
    try {
      const { token } = req.headers;
      if (!token) {
        throw { name: 'UserUnauthorized' }
      } else {
        const decoded = Jwt.verifyToken(token);
        const user = await User.findOne({
          where: {
            email: decoded.email
          }
        })
        if (!user) {
          throw { name: 'UserUnauthorized' }
        } else {
          req.loggedIn = decoded;
          next();
        }
      }
    } catch (err) {
      console.log('error coy')
      next(err)
    }
  }
}

module.exports = Authenticate