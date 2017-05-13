const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

mongoose.connect(env.db);

const Task = require('../models/task');

// User.collection.drop();

Task
.create([
  {
    name: 'potato',
    description: 'Bar shift',
    location: 'London',
    price: 19.99
  }
])
.then(tasks => {
  console.log(`${tasks.length} tasks were created`);
  process.exit();
})
.catch(err => {
  console.log(err);
  process.exit();
});
