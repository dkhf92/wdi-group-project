angular
  .module('thisApp')
  .factory('Charity', Charity);

Charity.$inject = ['$resource', 'API'];
function Charity($resource, API) {
  return $resource(`${API}/charities/:id`, { id: '@_id'},{
    'update': { method: 'PUT'}
  });
}
