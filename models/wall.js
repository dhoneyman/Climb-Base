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
      },
      height: {
        type: DataTypes.INT
      },

});
      module.exports = Wall;