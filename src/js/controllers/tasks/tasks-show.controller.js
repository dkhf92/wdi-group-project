angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService'];
function TasksShowCtrl($stateParams, Task, CurrentUserService){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;

  console.log('Current user: ', vm.user);
  vm.task = Task.get($stateParams);
console.log('Task: ', vm.task);
  vm.request = () => {
    if (vm.task.requestedBy.includes(vm.user._id)) {
      return console.log('Sorry you already requested this job');
    }
    vm.task.requestedBy.push(vm.user._id); 
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        console.log('TASK: ', vm.task);
      });


  };


}
