const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wall extends Model {
}

Wall.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'location',
          key: 'id',
        }
      },
      height: {
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'wall',

});
      module.exports = Wall;