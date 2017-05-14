const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

mongoose.connect(env.db['development']);

const Task = require('../models/task');

// User.collection.drop();

Task
.create([
  {
    name: 'potato',
    description: 'Bar shift',
    location: 'London',
    price: 19.99
  },{
    name: 'move bed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    location: 'Harrow',
    price: 9.99
  },{
    name: 'something',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Germany',
    price: 1.99
  },{
    name: 'something else',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Peckham',
    price: 59.99
  },{
    name: 'dog sitting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Croydon',
    price: 49.99
  },{
    name: 'cleaning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Aldgate East',
    price: 69.99
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
