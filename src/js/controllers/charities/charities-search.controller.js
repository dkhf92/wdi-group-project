angular
.module('thisApp')
.controller('CharitySearchCtrl', CharitySearchCtrl);

CharitySearchCtrl.$inject = ['$http'];
function CharitySearchCtrl($http) {
  const vm = this;


  vm.charitySearch = () => {
    $http({
      method: 'GET',
      url: `http://api.justgiving.com/7f6218b2/v1/charity/search?q=${vm.charityFind}&pageSize=10`
    })
    .then(data => {
      vm.charities = data.data.charitySearchResults;
      console.log(data);
    });
  };

  function getCharity(charity) {
    $http({
      method: 'GET',
      url: `http://api.justgiving.com/7f6218b2/v1/charity/${charity}`
    })
    .then(data => {
      vm.charity = data.data;
      vm.charity.favouritedBy = [];
      vm.charity.charityId = data.data.id;
      console.log(data.data);
    });
  }

  vm.showModal = (charity) => {
    getCharity(charity);
    vm.charityModal.style.display = 'block';
  };
  window.onclick = function(event) {
    if (event.target == vm.charityModal) {
      vm.charityModal.style.display = 'none';
    }
  };

  vm.closeModal = () => {
    vm.charityModal.style.display = 'none';
  };

  vm.charityModal = document.getElementById('charityModal');

}
