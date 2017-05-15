angular
  .module('thisApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User'];
function LoginCtrl(User) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        console.log('LoginCtrl data: ', data);
      }, err => {
        console.log('LoginCtrl error: ', err);
      });
  };
}
