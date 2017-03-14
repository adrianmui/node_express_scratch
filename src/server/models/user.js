'use strict';

const Sequelize = require('sequelize');
const db = require('./sqlize');

// sample adding User model.
let User = db.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    newUser: Sequelize.BOOLEAN
});

module.exports = User;