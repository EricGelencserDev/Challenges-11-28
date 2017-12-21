let Sequelize = require ('sequelize')

module.exports = new Sequelize( 'postgres', 'learn','postgres', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0
  }
})
