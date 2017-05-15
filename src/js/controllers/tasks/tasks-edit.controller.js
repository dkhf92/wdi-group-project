angular
.module('thisApp')
.controller('TasksEditCtrl', TasksEditCtrl);

TasksEditCtrl.$inject = ['$stateParams', 'Task', '$state'];
function TasksEditCtrl($stateParams, Task, $state){
  const vm  = this;
  vm.task = Task.get($stateParams);
  vm.update = tasksUpdate;

  function tasksUpdate(){
    Task
    .update({id: $stateParams.id }, vm.task)
    .$promise
    .then(() => {
      $state.go('tasksIndex');
    });
  }
}
