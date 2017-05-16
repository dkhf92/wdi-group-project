angular
.module('thisApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['$stateParams', 'Task', 'CurrentUserService'];
function TasksShowCtrl($stateParams, Task, CurrentUserService){
  const vm  = this;

  vm.user = CurrentUserService.currentUser;

  vm.task = Task.get($stateParams);

  vm.request = () => {
    if ((vm.task.requestedBy.find(x => x._id === vm.user._id)) || (vm.task.createdBy === vm.user._id)) {
      return console.log('Sorry you can\'t request this job - you either created it, or have already requested it.');
    }
    vm.task.requestedBy.push(vm.user._id);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

  vm.assign = (user) => {
    if (vm.task.assignedTo.find(x => x._id === user._id)) {
      return console.log('Sorry that user is already assigned to this task.');
    }
    vm.task.assignedTo.push(user._id);
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(() => {
        vm.task = Task.get($stateParams);
      });
  };

}
