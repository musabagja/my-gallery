const jwt = require('jsonwebtoken');

class Jwt {
  static signToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
  }

  static verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
  }
}

module.exports = Jwt