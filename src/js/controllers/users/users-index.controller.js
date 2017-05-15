angular
.module('thisApp')
.controller('UserIndexCtrl', UserIndexCtrl);

UserIndexCtrl.$inject = ['Task'];
function UserIndexCtrl(Task){
  const vm  = this;
  vm.tasks = Task.query();
  // vm.delete  = tasksDelete;
  //
  //
  // function tasksDelete(activity) {
  //   Task
  //   .remove({ id: activity._id })
  //   .$promise
  //   .then(() => {
  //     $state.go('tasksIndex');
  //   });
  // }

}
