angular
  .module('thisApp')
  .controller('CharityShowCtrl', CharityShowCtrl);

CharityShowCtrl.$inject = ['$stateParams', 'Charity', 'CurrentUserService', '$http', 'User', 'filterFilter'];
function CharityShowCtrl($stateParams, Charity, CurrentUserService, $http, User, filterFilter) {
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
      console.log(data.data);
    });
  }

  getCharity();

  function saveCharity(charity) {
    Charity
    .save(charity)
    .$promise
    .then(() => {
      Charity
        .query()
        .$promise
        .then(charities => {
          // console.log(charities);
          vm.dbEntry = filterFilter(charities, { charityId: $stateParams.id});
          console.log('dbEntry', vm.dbEntry);
        });

      // vm.user.charities.push(dbEntry.id);
      // User
      //   .update({  })
      console.log('saved', charity);
    });
  }
}
