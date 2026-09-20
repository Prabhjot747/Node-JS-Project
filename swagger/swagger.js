// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API',
            version: '1.0.0',
            description: 'A simple Express User API',
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API routes folders
}

module.exports = { swaggerOptions }
