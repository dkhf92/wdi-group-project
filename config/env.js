module.exports = {
  env: process.env.NODE_ENV,
  db: {
    production: process.env.MONGOD_URI,
    development: `mongodb://localhost/tasks-${this.env}`,
    test: `mongodb://localhost/tasks-${this.env}`
  }
};
