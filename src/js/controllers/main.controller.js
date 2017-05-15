angular
  .module('thisApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootscope', '$state', '$auth'];
function MainCtrl($rootscope, $state, $auth) {
  const vm = this;
  vm.isNavCollapsed = true;
}
