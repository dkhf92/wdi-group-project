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
    image: 'http://www.bar-and-cellar-solutions.co.uk/wp-content/uploads/2016/11/photo-1468072114808-903e572b8ead-400x400.jpg',
    description: 'Need bartender for a busy night',
    location: {postcode: 'se167eg', streetName: 'Plough Way'},
    date: '17/05/2017',
    price: 19.99
  },{
    name: 'Move bed',
    image: 'https://secure.img1-fg.wfcdn.com/lf/49/hash/31440/14117336/1/Mya+Bed+FrameHome-and-Haus-Mya-Bed-Frame.jpg',
    description: 'Help me move my bed, I live on 10th floor without elevator',
    location: {postcode: 'e1 7eg', streetName: 'Gravel Lane'},
    date: '17/05/2017',
    price: 10
  },{
    name: 'A concert',
    image: 'http://diggedi.com/images/social_media7.jpg',
    description: 'Hi, we are looking for staff for our consert this weekend(00/00/00). We need security, people to sell beer and tickets.',
    location: {postcode: 'SW4 9DE', streetName: 'Clapham Common'},
    date: '17/05/2017',
    price: 30
  },{
    name: 'Cat sitting',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/68/14/a0/6814a061a5f67a15bc0b1dff4cd2d8dd.jpg',
    description: 'Need help to take care of my cat for a day',
    location: { postcode: 'SE15 3UA', streetName: 'Straker\'s Rd'},
    date: '17/05/2017',
    price: 59.99
  },{
    name: 'Dog sitting',
    image: 'http://fanbrowser.com/wp-content/uploads/group-avatars/142/583c482081ad5-bpfull.jpg',
    description: 'Take care of my dog for a day',
    location: { postcode: 'CR9 1ET', streetName: 'Katharine St.'},
    date: '17/05/2017',
    price: 49.99
  },{
    name: 'Cleaning',
    image: 'http://www.homedepot.com/catalog/productImages/400_compressed/21/2132c0f5-8d3d-49d2-919f-7be5c7e35d5f_400_compressed.jpg',
    description: 'Clean my house',
    location: { postcode: 'E1 7PT', streetName: 'Whitechapel High St.'},
    date: '17/05/2017',
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
