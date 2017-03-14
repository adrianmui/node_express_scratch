'use strict'

// this is a test to test model Users
const User = require('../src/server/models/user');
const assert = require('assert');
const should = require('should');

describe('User', () => {
    describe('#findAll()', () => {
        let users;
        before(() => {
            users = User.findAll();
        })

        it('should have length > 0', () => {
            users.then((resp) => resp.length.should.be.exactly(2));
        });
    });

    describe('#where()', () => {
        let user;
        before(() => {
            user = User.findAll({
                where: { id: 1 }
            }).then((usr) => {
                return usr[0].dataValues;
            });
        });

        it('should exist', () => {
            should.exist(user);
        });

        it('should have properties firstname and lastname', () => {
            user.then((resp) => {
                (resp.should.have.property('firstName') && resp.should.have.property('lastName'));

            });
        });
    });

});