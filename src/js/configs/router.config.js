angular
.module('thisApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('tasksNew', {
    url: '/tasks/new',
    templateUrl: '/js/views/tasks/new.html',
    controller: 'TasksNewCtrl',
    controllerAs: 'tasksNew'
  })
  .state('tasksIndex', {
    url: '/tasks',
    templateUrl: '/js/views/tasks/index.html',
    controller: 'TasksIndexCtrl',
    controllerAs: 'tasksIndex'
  })
  .state('tasksShow', {
    url: '/tasks/:id',
    templateUrl: '/js/views/tasks/show.html',
    controller: 'TasksShowCtrl',
    controllerAs: 'tasksShow'
  })
  .state('tasksEdit', {
    url: '/tasks/:id/edit',
    templateUrl: '/js/views/tasks/edit.html',
    controller: 'TasksEditCtrl',
    controllerAs: 'tasksEdit'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UserIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UserShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('charity', {
    url: '/charities',
    templateUrl: '/js/views/charities/index.html',
    controller: 'CharitySearchCtrl as charities'
  })
  .state('charityShow', {
    url: '/charities/:id',
    templateUrl: '/js/views/charities/show.html',
    controller: 'CharityShowCtrl as charity'
  })
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  });

  $urlRouterProvider.otherwise('/');
}
