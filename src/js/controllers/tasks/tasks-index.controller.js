angular
.module('thisApp')
.controller('TasksIndexCtrl', TasksIndexCtrl);

TasksIndexCtrl.$inject = ['Task', '$state', 'CurrentUserService', 'filterFilter'];
function TasksIndexCtrl(Task, $state, CurrentUserService, filterFilter){
  const vm  = this;
  vm.user = CurrentUserService.currentUser;

  vm.delete  = tasksDelete;

  function tasksDelete(activity) {
    Task
    .remove({ id: activity._id })
    .$promise
    .then(() => {
      $state.go('tasksIndex');
    });
  }

  if(vm.user) {
    createdTasks();
    availableTasks();
  }
  function availableTasks() {
    const params = { createdBy: '!' + vm.user._id };
    Task
      .query()
      .$promise
      .then(tasks => {
        vm.available = filterFilter(tasks, params);
      });
  }

  function createdTasks() {
    const params = { createdBy: vm.user._id };
    Task
      .query()
      .$promise
      .then(tasks => {
        vm.created = filterFilter(tasks, params);
      });
  }



  // function filterTasks(a) {
  //   const params = a;
  //   console.log('Hi there');
  //   console.log(a);
  //   Task
  //     .query()
  //     .$promise
  //     .then(tasks => {
  //       console.log('yo');
  //       return filterFilter(tasks, params);
  //     });
  // }
  // vm.created = filterTasks({ createdBy: vm.user._id});
  // vm.available = filterTasks({ createdBy: '!' + vm.user._id});

}
