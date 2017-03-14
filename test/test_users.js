'use strict'

// this is a test to test model Users
const User = require('../src/server/models/user');
const assert = require('assert');
const should = require('should');

// wipes database

describe('User', () => {
    before((done) => {
        User.drop()
            .then(() => {
                return User.sync({ force: true });
            })
            .then(() => {
                User.build({
                        firstName: 'Test',
                        lastName: 'Case',
                        newUser: true
                    })
                    .save()
                    .then(done);
            })
            .then(() => {
                done();
            });
    });

    describe('#findAll()', () => {
        let users;
        before(() => {
            users = User.findAll();
        });

        it('should have length > 0', () => {
            users.then((resp) => {
                return (resp.length.should.be.exactly(1));
            });
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
            return should.exist(user);
        });

        it('should have properties firstname and lastname', () => {
            user.then((resp) => {
                return (resp.should.have.property('firstName') && resp.should.have.property('lastName'));
            });
        });
    });

    describe('#update()', (done) => {
        it('should update property', () => {
            let user = User.findAll({
                where: { id: 1 }
            }).then((usr) => {
                return usr[0].dataValues;
            });

            user.then((resp) => {
                resp.updateAttributes({
                    newUser: 'false'
                });
            }).then(() => {
                done();
            });

        });
    });
});