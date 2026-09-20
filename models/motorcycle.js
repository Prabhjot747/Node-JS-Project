const {DataTypes}=require('sequelize')
const {sequelize}=require('../database/index')


const Motorcycle=sequelize.define('Motorcycle',{
    motorcycle_name:DataTypes.STRING,
    allowNull:false
})

module.exports={Motorcycle}