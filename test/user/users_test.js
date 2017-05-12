/* globals users */

require('../spec_helper');

describe('User Controller Test', () => {
  describe('GET /users', () => {
    it('should return a 200 response', done => {
      users
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
