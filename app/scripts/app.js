'use strict';

angular.module('Tate', [

    'Tate.About',
    //Vendor
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ui.bootstrap',
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
                abstract: true,
                url: '/',
                views: {
                        template: '<h1> test </h1>',
                        controller: 'MainCtrl'
                    }
            }).
            state('home.about', {
                url:'about',
                views: {
                        templateUrl: '../views/about.html',
                        controller: 'AboutCtrl'
                    }
            });
    });