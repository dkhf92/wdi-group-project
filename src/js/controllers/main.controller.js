angular
.module('thisApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope) {
  const vm = this;

  vm.isNavCollapsed  = true;
  // vm.isAuthenticated = $auth.isAuthenticated;

  // $rootScope.$on('error', (e, err) => {
  //   vm.stateHasChanged = false;
  //   vm.message = err.data.message;
  //   $state.go('login');
  // });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;
  });

  // function logout() {
  //   $auth.logout();
  //   $state.go('login');
  // }
  // vm.logout = logout;
}
