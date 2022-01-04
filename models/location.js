const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
      id: {
        type: DataTypes.INT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      
      name: { 
          type: DataTypes.CHAR,
      },
      
      state_id: { 
          type: DataTypes.INT,
      },

    }
  );