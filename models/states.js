const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class States extends Model {
}

States.init(
    {
        id: {
            type: DataTypes.INT, 
            allowNull: false,
        },
        state: {
            type: DataTypes.CHAR,
        },
    }
);


    module.exports = States; 
