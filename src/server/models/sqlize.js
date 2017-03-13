let Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(process.env.DB_URL, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
});

// testing connection
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully. Adrian says hi to PostGresQL.');
    })
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    });

module.exports = sequelize;