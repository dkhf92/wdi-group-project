module.exports = {
  env: process.env.NODE_ENV,
  db: 'mongodb://localhost/thisApp',
  secret: process.env.SECRET || 'this is so secret OMFG'
};
