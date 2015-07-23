angular
    .module('app')
    .factory('ThingService', ['FirebaseService', 'THINGS', function ThingServiceFactory(FirebaseService, THINGS) {
        return {
          all: function(name) { 
            return FirebaseService.asArray("/" + name);
          },
          one: function(name, id) {
            return FirebaseService.asObject("/" + name + "/" + id);
          },
          forParent: function(name, parentName, parentId) {
              var childThingRefs = FirebaseService.asArray("/" + parentName + "/" + parentId + "/" + name);
              // walk over references and replace them with full records
              childThingRefs.$loaded().then(function(childThingRefs) {
                  angular.forEach(childThingRefs, function(childRef) {
                      var childThing = this.one(name, childRef.key());
                      childThing.$loaded().then(function(childThing) {
                         childRef = childThing; 
                      });
                  });                  
              });
          },
          add: function(name, thing, parentThings) {
              var things = FirebaseService.asArray("/" + name);
              // create references to  parents in thing
              angular.forEach(parentThings, function(parentName, parentId) {
                 thing[parentName] = parentId; 
              });
              things.$add(thing).then(function(ref) {
                  var thingId = ref.key();
                  // create references to this thing in parent things
                  angular.forEach(parentThings, function(parentName, parentId) {
                      var refObj = FirebaseService.asObject("/" + parentName + "/" + parentId + "/" + name + "/" + thingId);
                      refObj.name = name;
                      refObj.$save();
                  });
              });
          },
          remove: function(name, id) {
              var thingDef = THINGS[name];
              var parentThings = thingDef.child_of;
              var thing = FirebaseService.asObject("/" + name + "/" + id);
              thing.$loaded().then(function(thing) {
                  // remove references to this thing from parent things 
                  angular.forEach(parentThings, function(parentThing) {
                      var parentId = thing[parentThing];
                      if (parentId) {
                          var refObj = FirebaseService.asObject("/" + parentThing + "/" + parentId + "/" + name + "/" + id); 
                          refObj.$remove();
                      }
                  })              
                  thing.$remove();
              });
          },
          update: function(name, thing, newParentThings) {
              var id = thing.key;
              angular.forEach(newParentThings, function(parentName, parentId) {
                  // update references to thing in parents
                  var oldParentId = thing[parentName];
                  var refObj = FirebaseService.asObject("/" + parentName + "/" + oldParentId + "/" + name + "/" + id); 
                  refObj.$remove();
                  refObj = FirebaseService.asObject("/" + parentName + "/" + parentId + "/" + name + "/" + id); 
                  refObj.name = name;
                  refObj.$save();
                   // update parent references in thing
                  thing[parentName] = parentId;
              });
              thing.$save();
          }
        };
    }]);