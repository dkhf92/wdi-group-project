angular
.module('thisApp')
.controller('TasksNewCtrl', TasksNewCtrl);

TasksNewCtrl.$inject = ['$state', 'Task', 'CurrentUserService'];
function TasksNewCtrl($state, Task, CurrentUserService){
  const vm = this;
  vm.create = taskCreate;

  vm.user = CurrentUserService.currentUser;

  function taskCreate(){
    vm.task.createdBy = vm.user._id;
    Task
    .save(vm.task)
    .$promise
    .then(() => {
      $state.go('tasksIndex');
    });
  }
}
