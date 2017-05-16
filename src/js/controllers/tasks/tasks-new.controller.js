angular
.module('thisApp')
.controller('TasksNewCtrl', TasksNewCtrl);

TasksNewCtrl.$inject = ['$state', 'Task', 'CurrentUserService'];
function TasksNewCtrl($state, Task, CurrentUserService){
  const vm = this;
  vm.create = taskCreate;

  vm.user = CurrentUserService.currentUser;

  function taskCreate(){
    console.log('a');
    vm.task.createdBy = vm.user._id;
    Task
    .save(vm.task)
    .$promise
    .then(() => {
      console.log('b');
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
