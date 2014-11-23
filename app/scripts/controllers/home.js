'use strict';

angular.module('Tate.Controllers.Home', [])
  .controller('homeController', function($scope, $rootScope, artifacts, performances) {
        $scope.artifacts = artifacts;
        $scope.performances = performances;
  });
