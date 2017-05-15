angular
  .module('thisApp')
  .factory('Charity', Charity);

Charity.$inject = ['$resource'];
function Charity($resource) {
  return $resource('http://localhost:4000/api/charities/:id', { id: '@_id'},{
    'update': { method: 'PUT'}
  });
}
