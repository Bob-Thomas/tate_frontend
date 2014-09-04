'use strict';

/**
 * @ngdoc function
 * @name museumTateFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the museumTateFrontendApp
 */
angular.module('Tate')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        console.log($scope.awesomeThings);
  });
