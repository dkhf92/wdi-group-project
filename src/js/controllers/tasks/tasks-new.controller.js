angular
.module('thisApp')
.controller('TasksNewCtrl', TasksNewCtrl);

TasksNewCtrl.$inject = ['$state', 'Task'];
function TasksNewCtrl($state, Task){
  const vm = this;
  vm.create = taskCreate;

  function taskCreate(){
    Task
    .save(vm.task)
    // .save(vm.task)
    .$promise
    .then(() => {
      $state.go('tasksIndex');
    });
  }
}
