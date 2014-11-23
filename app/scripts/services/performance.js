'use strict';

angular.module('Tate.Services.Performance', [])
  .factory('performance', function($rootScope, $http, $q) {

        function get(url) {
          var deferred = $q.defer();

          $http({
            method: 'GET',
            url:location.protocol+"//"+location.hostname+':5000/'+url
          })
            .success(function(data) {
              deferred.resolve(data)
            })
            .error(function(error) {
              console.log("error retrieving performance");
              deferred.reject();
            });

          return deferred.promise;
        }



      return {
        performances: function() {
          return get('performances/')
        },
        getPerformance:function(id) {
          return get('performances/'+id)
        }
      }
  });
