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
    Task
      .create({
        name: 'A little job',
        description: 'Go do some things please',
        location: 'Somewhere, anywhere',
        price: 8.99
      });
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

    it('should return a json object', done => {
      api
        .get('/api/tasks')
        .set('Authorization', 'Bearer '+myToken)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array', done => {
      api
        .get('/api/tasks')
        .set('Authorization', 'Bearer '+myToken)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of tasks', done => {
      api
        .get('/api/tasks')
        .set('Authorization', 'Bearer ' + myToken)
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'name',
              'description',
              'location',
              'price',
              'createdAt',
              'updatedAt'
            ]);
          done();
        });
    });

    it('should return a task object', done => {
      api
        .get('/api/tasks')
        .set('Authorization', 'Bearer ' + myToken)
        .set('Accept', 'application/json')
        .end((err, res) => {
          const task = res.body[0];

          expect(task)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(task)
            .to.have.property('name')
            .and.to.be.a('string');

          expect(task)
            .to.have.property('description')
            .and.to.be.a('string');

          expect(task)
            .to.have.property('location')
            .and.to.be.a('string');

          expect(task)
            .to.have.property('price')
            .and.to.be.a('number');

          done();
        });
    });

    it('should return a specific task object', done => {
      api
        .get('/api/tasks')
        .set('Authorization', 'Bearer ' + myToken)
        .set('Accept', 'application/json')
        .end((err, res) => {
          const task = res.body[0];

          expect(task)
            .to.have.property('name')
            .and.to.equal('A little job');

          expect(task)
            .to.have.property('description')
            .and.to.equal('Go do some things please');

          expect(task)
            .to.have.property('location')
            .and.to.equal('Somewhere, anywhere');

          expect(task)
            .to.have.property('price')
            .and.to.equal(899);

          done();
        });
    });
  });
});
