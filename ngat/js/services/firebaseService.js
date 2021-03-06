angular
    .module('app')
    .factory('FirebaseService', ['$firebaseArray', '$firebaseObject', 'FIREBASE_URL', 'APP_NAME', 
      function FirebaseServiceFactory($firebaseArray, $firebaseObject, FIREBASE_URL, APP_NAME) {
        return {
          asArray: function(path) {
            // download the data into a local array
            return $firebaseArray(this.getRef(path));            
          },
          asObject: function(path) { 
            // download the data into a local object
            return $firebaseObject(this.getRef(path));
          },
          getRef: function(path) {
            // get firebase reference
            return new Firebase(FIREBASE_URL + "/" + APP_NAME + "/" + path);
          }
        }
    }]);