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

  function availableTasks() {
    const params = { createdBy: '!' + vm.user._id };
    Task
      .query()
      .$promise
      .then(tasks => {
        vm.available = filterFilter(tasks, params);
      });
  }

  function filterTasks() {
    const params = { createdBy: vm.user._id };
    Task
      .query()
      .$promise
      .then(tasks => {
        vm.filtered = filterFilter(tasks, params);
      });
  }
  filterTasks();
  availableTasks();
}
