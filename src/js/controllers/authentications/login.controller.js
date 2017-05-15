angular
  .module('thisApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'TokenService'];
function LoginCtrl(User, TokenService) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        console.log('LoginCtrl data: ', data);
        TokenService.setToken(data.token);
      }, err => {
        console.log('LoginCtrl error: ', err);
      });
  };
}
