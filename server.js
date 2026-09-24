const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { swaggerOptions } = require('./swagger/swagger.js')
const router = require('./routes/motorcycle')
const engines = require('./routes/engineRoutes.js')

const { checkConnection } = require('./database/index.js')

// Usage in app.js
const { errorHandler } = require('./middleware/errorMiddleware')
const { AppError } = require('./utils/errorHandler')

app.use(express.json())
const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api/v1/motorcycle', router)
app.use('/api/v1/engine', engines)

// app.use('/api/motorcycle', createMotorcycle)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// This route throws a custom error
app.get('/api/error-demo', (req, res, next) => {
    next(new AppError(404, 'Resource not found'))
})
checkConnection()
// Error handling middleware (must be last)
app.use(errorHandler)

app.listen(8080, () => {
    console.log('console.log....')
})
