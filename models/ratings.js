const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {
}

Rating.init(
    {
      route_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      review: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: 'rating'
    }
);

module.exports = Rating;