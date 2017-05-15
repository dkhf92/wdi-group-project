const express    = require('express');
const port       = process.env.PORT || 4000;
const app        = express();
const dest       = `${__dirname}/public`;
const config     = require('./config/env');
const router     = require('./config/routes');
const expressJWT = require('express-jwt');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const cors       = require('cors');
const environment = app.get('env');


mongoose.connect(config.db[environment]);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(dest));
app.use(cors());


app.use('/api', expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['POST'] },
      { url: '/api/login',    methods: ['POST'] },
      { url: '/api/tasks',    methods: ['GET'] }

    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
