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

  describe('POST /api/register', () => {
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
    // it('should return an array of users', done => {
    //   api
    //     .get('/api/users')
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //       expect(res.body).to.be.an('array');
    //       done();
    //     });
    // });

  });
});
