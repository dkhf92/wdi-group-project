/* globals users, expect */

require('../spec_helper');

describe('User Controller Test', () => {
  describe('GET /users', () => {
    it('should return a 200 response', done => {
      users
        .get('/users')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('should return an array of users', done => {
      users
        .get('/users')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

  });
});
