angular
.module('thisApp')
.controller('TasksIndexCtrl', TasksIndexCtrl);

TasksIndexCtrl.$inject = ['Task', '$state', 'CurrentUserService', 'filterFilter'];
function TasksIndexCtrl(Task, $state, CurrentUserService, filterFilter){
  const vm  = this;
  vm.all = Task.query();
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

  function filterTasks() {
    const params = { createdBy: vm.user._id };
    // if (vm.useStrength) params.strength = vm.strength;
    // if (vm.useRoast) params.roast       = vm.roast;

    vm.filtered = filterFilter(vm.all, params);
  }
  filterTasks();
}
