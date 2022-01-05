const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wall extends Model {
}

Wall.init(
    {
      id: {
        type: DataTypes.INT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.CHAR        
      },
      location_id: {
        type: DataTypes.INT,
        allowNull: false,
        references: {
          model: 'location',
          key: 'id',
        }
      },
      height: {
        type: DataTypes.INT
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'wall',

});
      module.exports = Wall;