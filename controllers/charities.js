const Charity = require('../models/charity');

function charityIndex(req, res, next){
  Charity
    .find()
    .exec()
    .then(charities => {
      return res.status(200).json(charities);
    })
    .catch(next);
}

function charityShow(req, res, next) {
  Charity
    .findById(req.params.id)
    .exec()
    .then(charity => {
      if(!charity) {
        const error = new Error('No charity found');
        error.status = 404;
        return next(error);
      }
      return res.status(200).json(charity);
    })
    .catch(next);
}

function charityCreate(req, res) {
  const charity = new Charity(req.body);
  charity.save(err => {
    if(err) return res.status(500).json({ message: 'Something went wrong!'});
    return res.status(201).json(charity);
  });
}

function charityUpdate(req, res) {
  Charity
    .findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, charity) => {
      if(err) return res.status(500).json({ message: 'Something went wrong!'});
      if(!charity) return res.status(404).json({ message: 'No charity found' });
      return res.status(200).json(charity);
    });
}

function charityDelete(req, res) {
  Charity
    .findByIdAndRemove(req.params.id, (err, task) => {
      if(err) return res.status(500).json({ message: 'something went wrong!'});
      if(!task) return res.status(404).json({message: 'No charity found'});
      return res.status(200).json({ message: 'Charity successfully removed'});
    });
}

module.exports = {
  index: charityIndex,
  show: charityShow,
  create: charityCreate,
  update: charityUpdate,
  delete: charityDelete
};
