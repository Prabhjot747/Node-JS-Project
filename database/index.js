const { Sequelize } = require('sequelize')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    'royalenfieldeichermotordivison',
    'root',
    'welcome@123',
    {
        host: '127.0.0.1',
        dialect: 'mariadb',
        pool: {
            min: 0,
            max: 5,
            idle: 10000,
        },
        define: {
            charset: 'utf8',
            timestamps: false,
        },
        benchmark: false,
        logging: console.log,
        ssl: true,
    }
)

const checkConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
    // finally {
    //     sequelize.close()
    // }
}

module.exports = { checkConnection, sequelize }
