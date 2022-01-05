const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class State extends Model {
}

State.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        state: {
            type: DataTypes.CHAR,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'state',
    }
);


module.exports = State; 
