'use strict';

angular.module('Tate', [

  'Tate.About',
  //Vendor
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'LocalStorageModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    ///////////////////
    // States Config //
    ///////////////////

    // For any unmatched url, redirect to root
    $urlRouterProvider.otherwise('/');

    $stateProvider

      ///////////////////
      //Base Home State//
      ///////////////////

      .state('home', {
        url: '/',
        views: {
          '': {
            templateUrl: '../views/templates/layout.html'
          },
          'header@home' : {
            templateUrl: '../views/templates/header.html'
          },
          'footer@home' : {
            templateUrl: '../views/templates/footer.html'
          },
          'content@home': {
            templateUrl: '../views/templates/home-content.html'
          }
        }
      }).
      state('home.about', {
        url:'/about',
        views: {
          '': {
            templateUrl: '../views/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
  });

