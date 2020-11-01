const { User, Photo } = require('../models/index');
const Bcrypt = require('../helper/bcrypt');
const Jwt = require('../helper/jwt');

class Controller {
  static async register(req, res, next) {
    try {
      const newUser = {
        email: req.body.email,
        password: req.body.password
      }
      const user = await User.create(newUser);
      res.status(201).json({
        id: user.id,
        email: user.email
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (!user) {
        throw { name: 'WrongEmailPassword' }
      } else {
        if (!Bcrypt.comparePassword(password, user.password)) {
          throw { name: 'WrongEmailPassword' }
        } else {
          const access_token = Jwt.signToken({ id: user.id, email: user.email })
          res.status(200).json({access_token})
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async getPhotos(req, res, next) {
    try {
      console.log('sampe')
      const photos = await Photo.findAll({where: {
        UserId: req.loggedIn.id
      }})
      
      res.status(200).json(photos)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async addPhoto(req, res, next) {
    try {
      const { imageUrl } = req.body
      const newPhoto = await Photo.create({
        imageUrl, UserId: req.loggedIn.id
      });
      res.status(200).json(newPhoto);
    } catch(err) {
      next(err)
    }
  }

  static async deletePhoto(req, res, next) {
    try {
      console.log('SAMPE SINI 1')
      const deleted = await Photo.destroy({where: {
        id: req.params.id
      }})
      res.status(200).json({message: 'Delete Successful'})
    } catch(err) {
      next(err)
    }
  }
}

module.exports = Controller