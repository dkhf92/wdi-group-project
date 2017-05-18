angular
.module('thisApp')
.directive('tasksNew', tasksNew);


tasksNew.$inject = [];
function tasksNew (){
  console.log('firing');
  return{
    restrict: 'E',
    replace: 'true',
    templateUrl: '/js/views/tasks/new.html'
  };
}
