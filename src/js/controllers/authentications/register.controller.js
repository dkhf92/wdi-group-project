angular
  .module('thisApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User) {
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user)
      .$promise
      .then(data => {
        console.log('RegisterCtrl data: ', data);
      }, err => {
        console.log(err);
      });
  };
}
