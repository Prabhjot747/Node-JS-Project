const createMotorcycle = async (request, response) => {
    try {
        console.log('Try block...')
    } catch (error) {
        response.status(400).json({
            message: 'Error creating motorcycle',
            error: error.message,
        })
    }
}

module.exports = { createMotorcycle }
