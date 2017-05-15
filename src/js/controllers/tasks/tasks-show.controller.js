angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService'];
function TasksShowCtrl($stateParams, Task, CurrentUserService){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;

  console.log('Current user: ', vm.user);
  vm.task = Task.get($stateParams);

  // vm.request = () => {
  //   Task
  //     .update({})
  //
  //   vm.task
  // };
  //
  //
  // function tasksUpdate(){
  //   Task
  //   .update({id: $stateParams.id }, vm.task)
  //   .$promise
  //   .then(() => {
  //     $state.go('tasksIndex');
  //   });
  // }
}
