angular
    .module('app')
    .factory('ThingService', ['FirebaseService', function ThingServiceFactory(FirebaseService) {
        return {
          all: function(name) { 
            return FirebaseService.asArray("/" + name);
          },
          one: function(name, id) {
            return FirebaseService.asObject("/" + name + "/" + id);
          },
          add: function(name, thing) {
              var things = FirebaseService.asArray("/" + name);
              things.$add(thing);
          },
          remove: function(name, id) {
              var item = FirebaseService.asObject("/" + name + "/" + id);
              item.$remove();
          },
          update: function(item) {
              item.$save();
          }
        };
    }]);