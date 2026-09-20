const express = require('express')
const router = express.Router()
const { createMotorcycle } = require('../controllers/motorcyleControllers.js')

router.post('/', createMotorcycle)

module.exports = router
