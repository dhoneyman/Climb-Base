const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Route extends Model {
}

Route.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        //   location_id: {
        //       type: DataTypes.INTEGER,
        //       allowNull: false,
        //       references: {
        //         model: 'location',
        //         key: 'id',
        //       }
        //   },
        wall_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'wall',
                key: 'id',
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        //   rating_id: {
        //       type: DataTypes.INTEGER,
        //       references: {
        //         model: 'rating',
        //         key: 'id',
        //       }
        //   },
        FA: {
            type: DataTypes.CHAR,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'route',
    }
);
module.exports = Route;