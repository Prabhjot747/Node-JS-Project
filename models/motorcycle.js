const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')
const { engines } = require('./engineModel')
const { MotorcycleCategory } = require('./motorcycleCategories')

const Motorcycle = sequelize.define('Motorcycle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
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
        // unique: false,
        references: {
            model: 'engines',
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'motorcyclesCategories',
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
})

engines.hasOne(Motorcycle)
Motorcycle.belongsTo(engines)

MotorcycleCategory.hasOne(Motorcycle)
Motorcycle.belongsTo(MotorcycleCategory)

sequelize.sync({
    force: false,
})

module.exports = { Motorcycle }
