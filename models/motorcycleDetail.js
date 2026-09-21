const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

const MotorcycleDetails = sequelize.define('Motorcycle', {
    motorcycle_description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

sequelize.sync({
    force: false,
})

module.exports = { MotorcycleDetails }
