'use strict';

angular.module('Tate.Services.Page', [])
  .factory('page', function($rootScope, $http, $q) {

        function get(url) {
          var deferred = $q.defer();

          $http({
            method: 'GET',
            url:'http://localhost:5000/'+url
          })
            .success(function(data) {
              deferred.resolve(data)
            })
            .error(function(error) {
              console.log("error retrieving page");
              deferred.reject();
            });

          return deferred.promise;
        }



      return {
        pages: function() {
          return get('pages/')
        },
        getPerformance:function(id) {
          return get('pages/'+id)
        }
      }
  });
