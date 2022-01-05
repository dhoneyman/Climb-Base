const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {
}

Rating.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INT,
        allowNull: false,
      },
      route_id: {
        type: DataTypes.INTEGER,
        alllowNull: false,
        references: {
          model: 'route',
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
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: 'rating'
    }
);

module.exports = Rating;