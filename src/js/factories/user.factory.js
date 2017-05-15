angular
.module('thisApp')
.factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource) {
  return $resource(`${API}/users/:id`, {id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/register`}
  });
}
