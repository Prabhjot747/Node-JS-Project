const express = require('express')
const router = express.Router()
const { engines } = require('../models/engineModel.js')

router.get('/get', async (req, res) => {
    try {
        const enginesList = await engines.findAll()
        res.send(enginesList)
    } catch (error) {
        console.error('Error creating engines:', error)
        res.status(500).json({
            message: 'Error creating engines',
            error: error.message,
        })
    }
})

router.post('/create', async (req, res) => {
    try {
        console.log('enginesName...', req.body)
        const newengines = await engines.create({
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        })

        res.status(201).json({
            message: 'engines created successfully',
            data: newengines,
        })
    } catch (error) {
        console.error('Error creating engines:', error)
        res.status(500).json({
            message: 'Error creating engines',
            error: error.message,
        })
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const enginesName = req.body.enginesName
        console.log('req.body..', req.body)
        const enginesList = await engines.update(
            {
                enginesName: enginesName,
                updatedAt: new Date().toISOString(),
            },
            { where: { id: id } }
        )
        console.log('enginesList...', enginesList)
        res.status(200).json({
            message: 'engines updated successfully',
        })
    } catch (error) {
        console.error('Error creating engines:', error)
        res.status(500).json({
            message: 'Error fetching list of engines',
            error: error.message,
        })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const enginesList = await engines.destroy({ where: { id: id } })
        console.log('enginesList...', enginesList)
        res.status(200).json({
            message: 'engines deleted successfully',
        })
    } catch (error) {
        console.error('Error creating engines:', error)
        res.status(500).json({
            message: 'Error fetching list of engines',
            error: error.message,
        })
    }
})

module.exports = router
