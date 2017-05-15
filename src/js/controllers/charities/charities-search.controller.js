angular
  .module('thisApp')
  .controller('CharitySearchCtrl', CharitySearchCtrl);

CharitySearchCtrl.$inject = ['$http', '$scope', '$stateParams'];
function CharitySearchCtrl($http, $scope, $stateParams) {
  const vm = this;


  vm.charitySearch = () => {
    $http({
      method: 'GET',
      url: `http://api.justgiving.com/7f6218b2/v1/charity/search?q=${vm.charity}`
    })
    .then(data => {
      vm.charities = data.data.charitySearchResults;
      console.log(data);
    });
  };

}
