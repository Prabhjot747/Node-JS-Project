const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

const Motorcycle = sequelize.define('Motorcycle', {
    motorcycleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt',
    },
    engineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'engines',
            key: 'id',
        },
    },
})

sequelize.sync({
    force: false,
})

module.exports = { Motorcycle }
