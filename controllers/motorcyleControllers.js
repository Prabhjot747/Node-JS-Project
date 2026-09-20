const { sequelize } = require('../database/index')

const createMotorcycle = async (request, response) => {
    try {
        console.log('Try block...')

        const result = sequelize.query(
            'INSERT INTO motorcycles SET ?',
            { motorcycle_name: 'Bullet 350' },
            (error, results) => {
                if (error) {
                    console.error('Error inserting data:', error)
                    return
                }
                console.log('Data inserted successfully')
            }
        )
        response.status(201).send(`User added with ID: ${result.row[0].id}`)
    } catch (error) {
        response.status(400).json({
            message: 'Error creating motorcycle',
            error: error.message,
        })
    }
}

module.exports = { createMotorcycle }
