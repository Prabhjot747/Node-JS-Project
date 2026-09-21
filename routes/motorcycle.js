const express = require('express')
const router = express.Router()

const { Motorcycle } = require('../models/motorcycle.js')

const { createMotorcycle } = require('../controllers/motorcyleControllers.js')

// app.post('/create/motorcycle', createMotorcycle)

router.get('/get/motorcycle', async (req, res) => {
    try {
        const motorCycleList = await Motorcycle.findAll()
        // res.send(200).json({
        //     data:motorCycleList
        // })

        res.send(motorCycleList)
    } catch (error) {
        console.error('Error creating motorcycle:', error)
        res.status(500).json({
            message: 'Error creating motorcycle',
            error: error.message,
        })
    }
})

router.delete('/delete/motorcycle/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorCycleList = await Motorcycle.destroy({ where: { id: id } })
        // res.send(200).json({
        //     data:motorCycleList
        // })

        // res.send(motorCycleList)
        console.log('motorCycleList...', motorCycleList)

        res.status(200).json({
            message: 'Motorcycle deleted successfully',
        })
    } catch (error) {
        console.error('Error creating motorcycle:', error)
        res.status(500).json({
            message: 'Error fetching list of motorcycle',
            error: error.message,
        })
    }
})

router.post('/create/motorcycle', async (req, res) => {
    try {
        const { motorcycle_name } = req.body
        console.log('motorcycle_name', motorcycle_name)
        const newMotorcycle = await Motorcycle.create({ motorcycle_name })

        res.status(201).json({
            message: 'Motorcycle created successfully',
            data: newMotorcycle,
        })
    } catch (error) {
        console.error('Error creating motorcycle:', error)
        res.status(500).json({
            message: 'Error creating motorcycle',
            error: error.message,
        })
    }
})

module.exports = router
