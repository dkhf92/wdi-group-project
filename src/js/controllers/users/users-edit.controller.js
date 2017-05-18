angular
.module('thisApp')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state){
  const vm = this;
  vm.user = User.get($stateParams);
  vm.update = userUpdate;

  function userUpdate(){
    User
    .update({id: $stateParams.id}, vm.user)
    .$promise
    .then(()=>{
      console.log(vm.user);
      $state.go('usersIndex');
    });
  }
}
