/* globals api, expect */

require('../spec_helper');

const User = require('../../models/user');

// describe('User Controller Test', () => {
//   describe('GET /api/users', () => {
//     it('should return a 200 response', done => {
//       api
//         .get('/api/users')
//         .set('Accept', 'application/json')
//         .expect(200, done);
//     });
//     it('should return an array of users', done => {
//       api
//         .get('/api/users')
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           expect(res.body).to.be.an('array');
//           done();
//         });
//     });
//
//   });
// });

describe('User tests', () => {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('User Registration: POST /api/register', () => {
    it('should return a 201 response', done => {
      api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send({
        username: 'Test',
        firstName: 'Horace',
        lastName: 'Keating',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
      .expect(201, done);
    });

    it('should return a message, a user and a token', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'Test',
          firstName: 'Horace',
          lastName: 'Keating',
          email: 'test@test.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          const response = res.body;

          expect(response)
            .to.have.property('message')
            .and.to.be.a('string');
          expect(response)
            .to.have.property('user')
            .and.to.be.a('object');
          expect(response)
            .to.have.property('token')
            .and.to.be.a('string');

          done();
        });
    });

    it('should create a user', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'Test',
          firstName: 'Horace',
          lastName: 'Keating',
          email: 'test@test.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          const user = res.body.user;

          expect(user)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('username')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('firstName')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('lastName')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('email')
            .and.to.be.a('string');

          done();
        });
    });

  });


  describe('User Login: POST /api/login', () => {

    beforeEach(done => {
      User.collection.remove();
      api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send({
        username: 'Test',
        firstName: 'Horace',
        lastName: 'Keating',
        email: 'test@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
      .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      User.collection.remove();
      done();
    });

    it('should return a 200 response', done => {
      api
      .post('/api/login')
      .set('Accept', 'application/json')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(200, done);
    });

    it('should return a message, a user and a token', done => {
      api
      .post('/api/login')
      .set('Accept', 'application/json')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .end((err, res) => {
        const response = res.body;

        expect(response)
          .to.have.property('message')
          .and.to.be.a('string');
        expect(response)
          .to.have.property('user')
          .and.to.be.a('object');
        expect(response)
          .to.have.property('token')
          .and.to.be.a('string');

        done();
      });
    });

    it('should return a user with certain properties', done => {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .end((err, res) => {
          const user = res.body.user;

          expect(user)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('username')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('firstName')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('lastName')
            .and.to.be.a('string');
          expect(user)
            .to.have.property('email')
            .and.to.be.a('string');

          done();
        });
    });

    it('should return the user that logged in', done => {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .end((err, res) => {
          const user = res.body.user;

          expect(user)
            .to.have.property('username')
            .and.to.equal('Test');
          expect(user)
            .to.have.property('firstName')
            .and.to.equal('Horace');
          expect(user)
            .to.have.property('lastName')
            .and.to.equal('Keating');
          expect(user)
            .to.have.property('email')
            .and.to.equal('test@test.com');

          done();
        });
    });
  });
});
