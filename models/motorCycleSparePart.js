const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

const MotorcycleSpareParts = sequelize.define('MotorcycleSpareParts', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    length: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    width: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    height: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    material: {
        type: DataTypes.string,
        allowNull: false,
        unique: false,
    },
    strokeBore: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    wheelBase: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },
    capacity: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: false,
    },

    motorCycleId: {
        type: DataTypes.NUMBER,
        references: {
            model: 'Motorcycle',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
})

sequelize.sync({
    force: false,
})

module.exports = { MotorcycleSpareParts }
