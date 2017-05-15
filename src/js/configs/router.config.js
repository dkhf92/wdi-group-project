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
    controllerAs: 'tasksIndex'
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
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UserIndexCtrl',
    controllerAs: 'users'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UserShowCtrl',
    controllerAs: 'users'
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
  })
  .state('charity', {
    url: '/charities',
    templateUrl: 'js/views/charities/index.html',
    controller: 'CharitySearchCtrl as charities'
  });

  $urlRouterProvider.otherwise('/');
}
