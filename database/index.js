const { Sequelize } = require('sequelize')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    'royalenfieldeichermotordivison',
    'root',
    'welcome@123',
    {
        host: '127.0.0.1',
        dialect:
            'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
    }
)

const checkConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    } finally {
        sequelize.close()
    }
}



module.exports = { checkConnection ,sequelize}
