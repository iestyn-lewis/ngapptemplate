angular
    .module('app')
    .factory('itemService', ['FirebaseService', function ItemServiceFactory(FirebaseService) {
        return {
          var path = "/items";
          setPath: function(newPath) {
             path = newPath;  
          },
          all: function() { 
            return FirebaseService.asArray(path);
          },
          one: function(id) {
            return FirebaseService.asObject(path + "/" + id)
          },
          add: function(item) {
              var items = FirebaseService.asArray(path);
              items.$add(item);
          },
          remove: function(itemId) {
              var item = FirebaseService.asObject(path + "/" + itemId);
              item.$remove();
          },
          update: function(item) {
              item.$save();
          }
        };
    }]);