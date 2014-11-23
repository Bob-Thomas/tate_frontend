'use strict';

angular.module('Tate.Controllers.Room', [])
  .controller('roomController', function($scope, room) {
    $scope.room = room;
  });
