'use strict';

const Sequelize = require('sequelize');
const db = require('./sqlize');

// sample adding User model.
let User = db.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

module.exports = User;