const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },


      module.exports = 