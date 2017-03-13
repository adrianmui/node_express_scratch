const User = require('../models/user');

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