const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Route extends Model {
}

Route.init(
    { name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      difficulty: {
          type: DataTypes.CHAR,
          allowNull: false,
      },
      rating: {
          type: DataTypes.INT,
      },
      location_id: {
          type: DataTypes.INT,
          allowNull: false,
          references: {
            model: 'location',
            key: 'id',
          }
      },
      wall_id: {
          type: DataTypes.INT,
          references: {
            model: 'wall',
            key: 'id',
          }
      },
      user_id: {
          type: DataTypes.CHAR,
          references: {
            model: 'user',
            key: 'id',
          }
      },
      FA: {
          type: DataTypes.CHAR,
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'route',
    }
);    
module.exports = Route;