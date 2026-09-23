const express = require('express')
const router = express.Router()

const { Motorcycle } = require('../models/motorcycle.js')

// const { createMotorcycle } = require('../controllers/motorcyleControllers.js')

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

router.post('/create/motorcycle', async (req, res) => {
    try {
        const { motorcycleName } = req.body
        console.log('motorcycleName', motorcycleName)
        const newMotorcycle = await Motorcycle.create({
            motorcycleName,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
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

router.patch('/update/motorcycle/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorcycleName = req.body.motorcycleName
        console.log('req.body..', req.body)
        const motorCycleList = await Motorcycle.update(
            {
                motorcycleName: motorcycleName,
                updatedAt: new Date().toISOString(),
            },
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

router.delete('/delete/motorcycle/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorCycleList = await Motorcycle.destroy({ where: { id: id } })
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
