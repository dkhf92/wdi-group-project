const Task = require('../models/task');

function taskIndex(req, res, next){
  Task
  .find()
  .exec()
  .then(tasks => {
    return res.status(200).json(tasks);
  })
  .catch(next);
}

function taskShow(req, res, next){
  Task
  .findById(req.params.id)
  .exec()
  .then(task => {
    if(!task){
      const error = new Error('No task has been found');
      error.status = 404;
      return next(error);
    }
    return res.status(200).json(task);
  })
  .catch(next);

}


module.exports = {
  index: taskIndex
};
