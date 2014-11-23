'user strict';

angular.module('Tate.Services.Artifact', [])
  .factory('artifact', function($http, $rootScope, $q) {
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
          console.log("error retrieving order");
          deferred.reject();
        });

      return deferred.promise;
    }



    return {
      getArtifacts:function() {
        return get('artifacts/');
      },
      getArtifact:function(id) {
        return get('artifacts/'+id);
      }
    }
  });
