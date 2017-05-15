angular
  .module('thisApp')
  .controller('CharitySearchCtrl', CharitySearchCtrl);

CharitySearchCtrl.$inject = ['$resource', '$scope', '$stateParams'];
function CharitySearchCtrl($resource, $scope, $stateParams) {
  const vm = this;
  vm.charitySearch = charitySearch;


  function charitySearch() {
    return $resource(`http://api.justgiving.com/7f6218b2/v1/charity/search?=${$stateParams.charity}`, { id: '@_id' });
  }
}
