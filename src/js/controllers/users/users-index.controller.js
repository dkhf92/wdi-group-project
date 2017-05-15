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
  // function tasksDelete(task) {
  //   Task
  //   .remove({ id: task._id })
  //   .$promise
  //   .then(() => {
  //     $state.go('tasksIndex');
  //   });
  // }

}
