angular
.module('thisApp')
.controller('TasksNewCtrl', TasksNewCtrl);

TasksNewCtrl.$inject = ['$state', 'Task', 'CurrentUserService', 'User'];
function TasksNewCtrl($state, Task, CurrentUserService, User){
  const vm = this;
  vm.create = taskCreate;

  vm.user = CurrentUserService.currentUser;

  function taskCreate(){
    vm.task.createdBy = vm.user._id;
    Task
    .save(vm.task)
    .$promise
    .then(() => {
      // vm.user.tasksCreated.push(vm.task._id);
      // vm.task = Task.get(vm.task);
      // console.log('************** vm.task ************** ', vm.task);
      // User
      //   .update({ id: vm.user.id }, vm.user)
      //   .$promise
      //   .then(() => {
      //     console.log('*********** vm.user ********* ', vm.user);
      //     $state.go('tasksIndex');
      //   });
      $state.go('tasksIndex');
    });
  }
}
