const express = require('express')
const router = express.Router()

const { MotorcycleSpareParts } = require('../models/MotorcycleSpareParts.js')

router.get('/get/motorcycle', async (req, res) => {
    try {
        const motorCycleList = await MotorcycleSpareParts.findAll()

        res.send(motorCycleList)
    } catch (error) {
        console.error('Error creating motorcycle:', error)
        res.status(500).json({
            message: 'Error creating motorcycle',
            error: error.message,
        })
    }
})

router.post('/create/motorcycle/details', async (req, res) => {
    try {
        const { motorcycle_name } = req.body
        console.log('motorcycle_name', motorcycle_name)
        const newMotorcycle = await MotorcycleSpareParts.create({
            motorcycle_name,
        })

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

router.patch('/update/motorcycle/details/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorcycle_name = req.body.motorcycle_name
        console.log('req.body..', req.body)
        const motorCycleList = await MotorcycleSpareParts.update(
            { motorcycle_name: motorcycle_name },
            { where: { id: id } }
        )
        console.log('motorCycleList...', motorCycleList)
        res.status(200).json({
            message: 'Motorcycle updated successfully',
        })
    } catch (error) {
        console.error('Error creating motorcycle:', error)
        res.status(500).json({
            message: 'Error fetching list of motorcycle',
            error: error.message,
        })
    }
})

router.delete('/delete/motorcycle/details/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorCycleList = await MotorcycleSpareParts.destroy({
            where: { id: id },
        })
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

module.exports = router
