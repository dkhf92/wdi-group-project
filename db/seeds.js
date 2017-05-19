const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

mongoose.connect(env.db[process.env.NODE_ENV]);

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
    price: 20
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
    description: 'Hi, we are looking for staff for our consert this weekend. We need security, people to sell beer and tickets.',
    location: {postcode: 'SW4 9DE', streetName: 'Clapham Common'},
    date: '17/05/2017',
    price: 30
  },{
    name: 'Cat sitting',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/68/14/a0/6814a061a5f67a15bc0b1dff4cd2d8dd.jpg',
    description: 'Need help to take care of my cat for a day',
    location: { postcode: 'SE15 3UA', streetName: 'Straker\'s Rd'},
    date: '17/05/2017',
    price: 60
  },{
    name: 'Dog sitting',
    image: 'http://fanbrowser.com/wp-content/uploads/group-avatars/142/583c482081ad5-bpfull.jpg',
    description: 'Take care of my dog for a day',
    location: { postcode: 'CR9 1ET', streetName: 'Katharine St.'},
    date: '17/05/2017',
    price: 50
  },{
    name: 'Cleaning',
    image: 'http://www.homedepot.com/catalog/productImages/400_compressed/21/2132c0f5-8d3d-49d2-919f-7be5c7e35d5f_400_compressed.jpg',
    description: 'Clean my house',
    location: { postcode: 'E1 7PT', streetName: 'Whitechapel High St.'},
    date: '17/05/2017',
    price: 70
  }, {
    name: 'Mow the lawn',
    image: 'http://www.homedepot.com/catalog/productImages/400/9b/9b6e9670-e692-4699-9849-1a66f3e05db3_400.jpg',
    description: 'Mow my lawn',
    location: { postcode: 'CR9 1ET', streetName: 'Liverpool Street.'},
    date: '22/05/2017',
    price: 50
  }, {
    name: 'Build me a website',
    image: 'https://pbs.twimg.com/profile_images/848471660860538880/pevXVsIp_400x400.jpg',
    description: 'Need pro Coder to build a website about my cats',
    location: { postcode: 'CR9 1ET', streetName: 'Katharine St.'},
    date: '23/06/2017',
    price: 7999.99
  } , {
    name: 'Private Trainer',
    image: 'http://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/849559_010/air-max-2017-mens-running-shoe.jpg',
    description: 'Need a private trainer to get in shape!',
    location: { postcode: 'CR9 1ET', streetName: 'Prescot St.'},
    date: '23/06/2017',
    price: 49.99
  } , {
    name: 'Moving apartment',
    image: 'https://davpack.s3.amazonaws.com/h/alt/l/double-wall-boxes_3.jpg',
    description: 'Need help moving all my stuff to my new apartment. Around 6 hours work.',
    location: { postcode: 'CR9 1ET', streetName: 'Leman St.'},
    date: '23/06/2017',
    price: 79.99
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
