angular
.module('thisApp')
.controller('TasksIndexCtrl', TasksIndexCtrl);

TasksIndexCtrl.$inject = ['Task', '$state', 'CurrentUserService'];
function TasksIndexCtrl(Task, $state, CurrentUserService){
  const vm  = this;
  vm.all = Task.query();
  vm.user = CurrentUserService.currentUser;

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
