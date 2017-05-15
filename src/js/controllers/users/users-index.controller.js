angular
.module('thisApp')
.controller('UserIndexCtrl', UserIndexCtrl);

UserIndexCtrl.$inject = ['User'];
function UserIndexCtrl(User){
  const vm  = this;
  vm.users = User.query();
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
