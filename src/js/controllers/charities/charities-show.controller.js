angular
  .module('thisApp')
  .controller('CharityShowCtrl', CharityShowCtrl);

CharityShowCtrl.$inject = ['$stateParams', 'Charity', 'CurrentUserService', '$http'];
function CharityShowCtrl($stateParams, Charity, CurrentUserService, $http) {
  const vm = this;
  vm.user = CurrentUserService.currentUser;
  vm.saveCharity = saveCharity;

  function getCharity() {
    $http({
      method: 'GET',
      url: `http://api.justgiving.com/7f6218b2/v1/charity/${$stateParams.id}`
    })
    .then(data => {
      vm.charity = data.data;
      vm.charity.favouritedBy = [];
      vm.charity.charityId = data.data.id;
      console.log(data.data);
    });
  }

  getCharity();

  function saveCharity(charity) {

    Charity
      .query()
      .$promise
      .then(charities => {
        if (charities.find(x => x.name === charity.name)) {
          charity = charities.find(x => x.name === charity.name);
          if (charity.favouritedBy.indexOf(vm.user._id) === -1) {
            charity.favouritedBy.push(vm.user._id);
            Charity
              .update({ id: charity._id }, charity)
              .$promise
              .then(() => {
                return console.log('this charity already exists but you favourited it anyway', charity);
              });
          } else {
            return console.log('You already favourited this charity');
          }


        } else {
          charity.favouritedBy.push(vm.user._id);
          Charity
          .save(charity)
          .$promise
          .then(() => {
            console.log('new charity saved and favourited', Charity.query());
          });
        }
      });

  }

}
