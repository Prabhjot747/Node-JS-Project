const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

const MotorcycleCategory = sequelize.define('motorcyclesCategories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryName: {
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
})

sequelize.sync({
    force: false,
})

module.exports = { MotorcycleCategory }
