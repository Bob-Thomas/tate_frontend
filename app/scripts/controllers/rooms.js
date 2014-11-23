'use strict';

angular.module('Tate.Controllers.Rooms', [])
  .controller('roomsController', function($scope, $rootScope, rooms) {
        $scope.rooms = rooms;
  });
