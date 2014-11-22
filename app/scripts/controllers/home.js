'use strict';

angular.module('Tate.Controllers.Home', [])
  .controller('homeController', function($scope, $rootScope, artifacts) {
        $scope.artifacts = artifacts;
  });
