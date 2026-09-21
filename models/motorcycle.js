const { DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

const Motorcycle = sequelize.define('Motorcycle', {
    motorcycle_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

sequelize.sync({
    force: false,
})

module.exports = { Motorcycle }
