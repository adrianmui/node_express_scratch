const Sequelize = require('sequelize');

let sequelize = new Sequelize('postgres://ajniwwtl:X74axo0TMElLgPKAkpOk4yxIKHDAZHX0@stampy.db.elephantsql.com:5432/ajniwwtl');

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