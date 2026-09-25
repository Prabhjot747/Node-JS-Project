const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

const engines = sequelize.define('engines', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    dimensionLength: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    dimensionWidth: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    dimensionHeight: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    strokeWidth: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    boreWidth: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    maximumPowerBHP: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    maximumPowerHP: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    ignitionSystem: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    gearBox: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    engineOil: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    engineStart: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    engineDisplacement: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    maximumTorqueNM: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    maximumTorqueRPM: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },

    clutch: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    lubrication: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    airCleaner: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt',
    },
})

sequelize.sync({
    force: false,
})

module.exports = { engines }
