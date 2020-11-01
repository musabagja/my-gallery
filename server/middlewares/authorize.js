const { Photo } = require('../models/index')

class Authorize {
  static async photo(req, res, next) {
    try {
      console.log('SAMPE SINI')
      const photo = await Photo.findOne({where: {
        id: req.params.id
      }})
      if(photo) { 
        if(photo.UserId !== req.loggedIn.id) {
          throw {name: 'UserUnauthorized'}
        } else {
          next();
        }
      } else {
        throw {name: 'NotFound'}
      }
    } catch(err) {
      next(err);
    }
  }
}

module.exports = Authorize