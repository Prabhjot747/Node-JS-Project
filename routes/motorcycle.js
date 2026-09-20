const express = require('express')
const app = express()

const { createMotorcycle } = require('../controllers/motorcyleControllers.js')

app.post('/create/motorcycle', createMotorcycle)

module.exports = app
