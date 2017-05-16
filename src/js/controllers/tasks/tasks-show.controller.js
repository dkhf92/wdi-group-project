angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService'];
function TasksShowCtrl($stateParams, Task, CurrentUserService){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;

  vm.task = Task.get($stateParams);

  vm.request = () => {
    if (vm.task.requestedBy.find(x => x._id === vm.user._id)) {
      return console.log('Sorry you already requested this job');
    }
    vm.task.requestedBy.push(vm.user._id);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

}
