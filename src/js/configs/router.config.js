angular
.module('thisApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('tasksIndex', {
    url: '/tasks',
    templateUrl: '/js/views/tasks/index.html',
    controller: 'TasksIndexCtrl',
    controllerAs: 'tasks'
  })
  .state('tasksNew', {
    url: '/tasks/new',
    templateUrl: '/js/views/tasks/new.html',
    controller: 'TasksNewCtrl',
    controllerAs: 'tasks'
  })
  .state('tasksShow', {
    url: '/tasks/:id',
    templateUrl: '/js/views/tasks/show.html',
    controller: 'TasksShowCtrl',
    controllerAs: 'tasks'
  })
  .state('tasksEdit', {
    url: '/tasks/:id/edit',
    templateUrl: '/js/views/tasks/edit.html',
    controller: 'TasksEditCtrl',
    controllerAs: 'tasks'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/register.html',
    controller: 'RegisterCtrl as register'
  });

  $urlRouterProvider.otherwise('/');
}
