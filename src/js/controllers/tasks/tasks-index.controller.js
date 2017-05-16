angular
.module('thisApp')
.controller('TasksIndexCtrl', TasksIndexCtrl);

TasksIndexCtrl.$inject = ['Task', '$state', 'CurrentUserService', 'filterFilter', '$rootScope'];
function TasksIndexCtrl(Task, $state, CurrentUserService, filterFilter, $rootScope){
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

  if(!vm.user) {
    $rootScope.$on('loggedIn', () => {
      vm.user = CurrentUserService.currentUser;
      filterTasks();
    });
  } else {
    filterTasks();
  }


  function filterTasks() {
    createdTasks();
    availableTasks();
    requestedTasks();
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

  function requestedTasks() {
    // const params = { requestedBy: [vm.user._id] };
    Task
    .query()
    .$promise
    .then(tasks => {
      const requested = [];
      tasks.forEach(task => {
        if(task.requestedBy.find(x => x.user._id === vm.user._id)) {
          console.log('firing');
          requested.push(task);
        }
        // console.log(vm.requested);
      });
      vm.requested = requested;
    });
  }



  // function filterFunction(a) {
  //   const params = a;
  //   let filteredTasks;
  //   console.log('Hi there');
  //   console.log(a);
  //   Task
  //     .query()
  //     .$promise
  //     .then(tasks => {
  //       filteredTasks = filterFilter(tasks, params);
  //       console.log('filtered tasks: ', filteredTasks);
  //       return filteredTasks;
  //     });
  //
  // }
  // vm.created = filterFunction({ createdBy: vm.user._id});
  // vm.available = filterFunction({ createdBy: '!' + vm.user._id});
  // console.log('vm.created: ', vm.created);
  // console.log('vm.available: ', vm.available);

}
