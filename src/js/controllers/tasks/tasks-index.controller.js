angular
.module('thisApp')
.controller('TasksIndexCtrl', TasksIndexCtrl);

TasksIndexCtrl.$inject = ['Task', '$state'];
function TasksIndexCtrl(Task, $state){
  const vm  = this;
  vm.all = Task.query();


  vm.delete  = tasksDelete;


  function tasksDelete(activity) {
    Task
    .remove({ id: activity._id })
    .$promise
    .then(() => {
      $state.go('tasksIndex');
    });
  }
}
