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

// sample adding User model.
let User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// // force: true will drop the table if it already exists
// User.sync().then(function() {
//     // Table created
//     return User.create({
//         firstName: 'Adrian',
//         lastName: 'Mui'
//     });
// });

// sample ORM querying for all users.
User.findAll().then((resp) => {
        console.log(resp.length + ' counts currently in the database \n');
        resp.forEach((user) => {
            console.log(user.dataValues);
        })
    },
    (err) => {
        console.log('error: ' + err);
    })