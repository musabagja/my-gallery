'use strict';
const Bcrypt = require('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email has already registered'
      },
      validate: {
        notEmpty: {
          msg: 'Email required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = Bcrypt.hashPassword(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};