const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class BlogComment extends Model {}

BlogComment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = BlogComment;
