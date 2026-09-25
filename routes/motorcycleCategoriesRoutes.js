const express = require('express')
const router = express.Router()
const { MotorcycleCategory } = require('../models/motorcycleCategories')

router.get('/get', async (req, res) => {
    try {
        const motorCycleList = await MotorcycleCategory.findAll()
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

router.post('/create', async (req, res) => {
    try {
        console.log('motorcycleName...', req.body)
        const newMotorcycle = await MotorcycleCategory.create({
            categoryName: req.body.categoryName,
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

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorcycleName = req.body.motorcycleName
        console.log('req.body..', req.body)
        const motorCycleList = await MotorcycleCategory.update(
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

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const motorCycleList = await MotorcycleCategory.destroy({
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
