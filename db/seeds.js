const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

mongoose.connect(env.db['development']);

const Task = require('../models/task');
const User = require('../models/user');
const Charity = require('../models/charity');
User.collection.drop();
Task.collection.drop();
Charity.collection.drop();

Task
.create([
  {
    name: 'The Bar',
    image: 'http://www.algonquinhotel.com/wp-content/uploads/2015/02/blue-bar.jpg',
    description: 'Need bartender for a busy night',
    location: 'London',
    price: 19.99
  },{
    name: 'Move bed',
    image: 'http://www.ikea.com/gb/en/images/products/tarva-bed-frame-pine-lur%C3%B6y__0448696_pe598331_s4.jpg',
    description: 'Help me move my bed, I live on 10th floor without elevator',
    location: 'Harrow',
    price: 10
  },{
    name: 'A consert',
    image: 'http://www.candjonline.com/images/_og_images/img_audio_03.jpg',
    description: 'Hi, we are looking for staff for our consert this weekend(00/00/00). We need security, people to sell beer and tickets.',
    location: 'Germany',
    price: 30
  },{
    name: 'Cat sitting',
    image: 'https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg',
    description: 'Need help to take care of my cat for a day',
    location: 'Peckham',
    price: 59.99
  },{
    name: 'Dog sitting',
    image: 'https://i.ytimg.com/vi/dGpZEuXoFWw/hqdefault.jpg',
    description: 'Take care of my dog for a day',
    location: 'Croydon',
    price: 49.99
  },{
    name: 'Cleaning',
    image: 'https://images-na.ssl-images-amazon.com/images/I/814LxC6acQL._SY355_.jpg',
    description: 'Clean my house',
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
