/* globals api, expect */

require('../spec_helper');

const Task = require('../../models/task');
const User = require('../../models/user');


describe('Task tests', () => {

  let user;
  let myToken;

  beforeEach(done => {
    Task.collection.remove();
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
    .end((err, res) => {
      user = res.body.user;
      myToken = res.body.token;
      done();
    });
  });

  afterEach(done => {
    Task.collection.remove();
    User.collection.remove();
    done();
  });

  describe('Task Index: GET /api/tasks', () => {
    it('should return a 200 response', done => {
      api
        .get('/api/tasks')
        .set('Authorization', 'Bearer '+myToken)
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
