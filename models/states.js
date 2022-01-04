const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class States extends Model {
}

States.init(
    {
        state: {
            type: DataTypes.CHAR,
        },
        id: {
            type: DataTypes.INT, 
            allowNull: false,
        },
    }
);


    module.exports = States; 
