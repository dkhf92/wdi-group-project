module.exports = {
  env: process.env.NODE_ENV,
  db: {
    test: 'mongodb://localhost/thisApp-test',
    development: 'mongodb://localhost/thisApp-development',
    production: process.env.MONGODB_URI || 'mongodb://localhost/thisApp-production'
  },
  secret: process.env.SECRET || 'this is so secret OMFG'
};
