angular
  .module('thisApp')
  .factory('Task', Task);

Task.$inject = ['$resource'];
function Task($resource){
  
  return $resource('http://localhost:4000/api/tasks/:id', { id: '@_id'},{
    'update': { method: 'PUT'}
  });
}
