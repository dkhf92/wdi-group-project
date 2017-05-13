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

function taskCreate(req, res){
  const task = new Task(req.body); //
  task.save(err => {
    if(err) return res.status(500).json({ message: 'Something has gone wrong!!'});
    return res.status(201).json(task);
  });
}

function taskUpdate(req, res){
  Task
    .findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, task) => {
      if(err) return res.status(500).json({ message: 'Oops! something went wrong'});
      if(!task) return res.status(404).json({ message: 'There is no task here!' });
      return res.status(200).json(task);
    });
}

function taskDelete(req, res){
  Task
   .findByIdAndRemove(req.params.id, (err, task) => {
     if(err) return res.status(500).json({ message: 'something went wrong'});
     if(!task) return res.status(404).json({message: 'There is no task here!'});
     return res.status(200).json({ message: 'Task has been removed!'});
   });
}

module.exports = {
  index: taskIndex,
  show: taskShow,
  create: taskCreate,
  update: taskUpdate,
  delete: taskDelete
};
