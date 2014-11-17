'use strict';

angular.module('Tate.Services.Ticket', [])
  .factory('ticket', function($rootScope, $http, $q) {

        function fireOrder(form) {
          var deferred = $q.defer();

          $http({
            method: 'POST',
            url:'http://localhost:5000/ticket/order',
            data:form
          })
            .success(function(data) {
              deferred.resolve(data)
            })
            .error(function(error) {
              console.log("error sending order");
              deferred.reject();
            });

          return deferred.promise;
        }

        function retrieveOrder() {
          var deferred = $q.defer();

          $http({
            method: 'GET',
            url:'http://localhost:5000/ticket/order'
          })
            .success(function(data) {
              deferred.resolve(data)
            })
            .error(function(error) {
              console.log("error retrieving order");
              deferred.reject();
            });

          return deferred.promise;
        }



      return {
        fireOrder:function(form) {
          return fireOrder(form)
        },
        getOrder:function() {
          return retrieveOrder()
        }
      }
  });
