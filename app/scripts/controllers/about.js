'use strict';

/**
 * @ngdoc function
 * @name museumTateFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the museumTateFrontendApp
 */
angular.module('Tate.About',[])
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
