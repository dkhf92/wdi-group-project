angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task'];
function TasksShowCtrl($stateParams, Task){
  const vm  = this;
  vm.task = Task.get($stateParams);
}
