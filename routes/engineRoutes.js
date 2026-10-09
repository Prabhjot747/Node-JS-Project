const express = require('express')
const router = express.Router()
const { engines } = require('../models/engineModel.js')

/**
 * @swagger
 * /get:
 *   get:
 *     description: contains a reference outside this file
 */
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

// {
//     "name":"UCE",
//     "dimensionLength":120,
//     "dimensionWidth":120,
//     "dimensionHeight":130,
//     "strokeWidth":200,
//     "boreWidth":180,
//     "maximumPowerBHP":210,
//     "maximumPowerHP":250,
//     "ignitionSystem":"KICK START, SELF START, ELECTRIC FUEL INJECTION",
//     "gearBox":"5 SPEED",
//     "engineOil":"SEMI SYTHETIC",
//     "engineStart":"KICK START",
//     "engineDisplacement":349,
//     "maximumTorqueNM":150,
//     "maximumTorqueRPM":6000,
//     "clutch":"WET PLATE",
//     "lubrication":"CASTROL LUBRICANTS",
//     "airCleaner":"PAPER ELEMENT"
// }

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
