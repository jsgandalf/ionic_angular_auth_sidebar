'use strict';

app.config(function($stateProvider, $locationProvider, $urlRouterProvider, $injector, USER_ROLES) {

    $urlRouterProvider.otherwise(function ($injector, $location) {
      var $state = $injector.get("$state");
      $state.go("app.dashboard");
    });

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/menu/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'views/menu/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('app.admin', {
        url: '/admin',
        views: {
          'menuContent': {
            templateUrl: 'views/admin/admin.html'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      });

  });
