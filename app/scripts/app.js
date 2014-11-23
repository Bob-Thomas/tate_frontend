'use strict';

angular.module('Tate', [

  'Tate.Controllers.Home',
  'Tate.Controllers.Rooms',
  'Tate.Controllers.Room',
  'Tate.Controllers.TicketOrder',
  'Tate.Controllers.TicketView',
  'Tate.Services.Ticket',
  'Tate.Services.Artifact',
  'Tate.Services.Performance',
  'Tate.Services.Page',
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
            templateUrl: '../views/templates/home-content.html',
            controller: 'homeController',
            resolve: {
              artifacts: function(artifact) {
                return artifact.getArtifacts();
              },
              performances: function(performance) {
                return performance.performances();
              }
            }
          }
        }
      })
      .state('home.ticket', {
        url: 'kaartje',
        views: {
          'content@home': {
            templateUrl: '../views/templates/order-ticket.html'
          }
        }
      })
      .state('home.ticket.order', {
        url: '/bestellen',
        views: {
          'content@home': {
            templateUrl: '../views/templates/order-ticket.html',
            controller: 'ticketOrderController'
          }
        }
      })
      .state('home.ticket.order.complete', {
        url: '/overzicht',
        views: {
          'content@home': {
            templateUrl: '../views/templates/ticket-show.html',
            controller: 'ticketViewController',
            resolve : {
              loadedOrder : function(ticket) {
                return ticket.getOrder()
              }
            }
          }
        }
      })
      .state('home.darwin', {
        url: 'darwin',
        views: {
          'content@home': {
            templateUrl: '../views/templates/darwin.html'
          }
        }
      })
      .state('home.rooms', {
        url: 'zalen',
        views: {
          'content@home': {
            templateUrl: '../views/templates/rooms.html',
            controller: 'roomsController',
            resolve : {
              rooms: function(page) {
                return page.pages()
              }
            }
          }
        }
      })
      .state('home.rooms.room', {
        url: '/:roomId',
        views: {
          'content@home': {
            templateUrl: '../views/templates/room.html',
            controller: 'roomController',
            resolve : {
              room: function(page, $stateParams) {
                return page.getPerformance($stateParams.roomId)
              }
            }
          }
        }
      })
      .state('home.contact', {
        url: 'contact',
        views: {
          'content@home': {
            templateUrl: '../views/templates/contact.html'
          }
        }
      })
      .state('home.about', {
        url:'about',
        views: {
          '': {
            templateUrl: '../views/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
  });

