angular
    .module('app')
    .factory('GoogleService', ['$http',  function GoogleServiceFactory($http) {
        return {
          search: function(type, searchTerm, offset) {
            return $http.jsonp('https://ajax.googleapis.com/ajax/services/search/'
                               + type
                               + '?v=1.0&q=' 
                               + searchTerm
                               + '&start=' + offset
                               + '&callback=JSON_CALLBACK')
             .then(function(result) {
                return result.data;
            });  
          },
          imageSearch: function(searchTerm, offset) {
              return this.search('images', searchTerm, offset);
          },
          webSearch: function(searchTerm, offset) {
              return this.search('web', searchTerm, offset);
          },
          videoSearch: function(searchTerm, offset) {
              return this.search('video', searchTerm, offset);
          }
        }
    }]);