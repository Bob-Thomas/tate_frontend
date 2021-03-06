'use strict';

angular.module('Tate.Services.Ticket', [])
  .factory('ticket', function($rootScope, $http, $q) {

        function fireOrder(form) {
          var deferred = $q.defer();

          $http({
            method: 'POST',
            url:location.protocol+"//"+location.host+':5000/ticket/order',
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

        function retrieveOrder(url) {
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url:location.protocol+"//"+location.hostname+':5000/'+url
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
          return retrieveOrder('ticket/order/')
        },
        getTicket:function(id) {
          return retrieveOrder('ticket/get/'+id)
        }
      }
  });
