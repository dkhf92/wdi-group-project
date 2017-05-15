angular
  .module('thisApp')
  .factory('Task', Task);

Task.$inject = ['$resource', 'API'];
function Task($resource, API){

  return $resource(`${API}/tasks/:id`, { id: '@_id'},{
    'update': { method: 'PUT'}
  });
}
