angular
    .module('app')
    .controller('ngatViewController', ['$scope', 'THINGS', 'VIEWS', 'ThingService', '$routeParams', '$location',
      function($scope, THINGS, VIEWS, ThingService, $routeParams, $location) {
        $scope.debug = false;
        $scope.view = VIEWS[$scope.id];
        $scope.thingDef = THINGS[$scope.view.thing];
        $scope.thingId = $routeParams.id;
        $scope.newThing = {};
        $scope.updateMode = false;
        
        if ($scope.view.type == 'list') {
            $scope.things = ThingService.all($scope.view.thing);
        }
          
        if ($scope.view.type=='detail') {
            $scope.thing = ThingService.one($scope.view.thing, $scope.thingId);
        }
        
        $scope.objectField = function(name) {
           return $scope.thingDef.fields[name];  
        };
       
        $scope.toggleView = function() {
            $scope.view.visible = !$scope.view.visible;
        };
        
        $scope.addThing = function() {
            ThingService.add($scope.view.thing, $scope.newThing);
            $scope.newThing = {};
            $scope.view.visible = false;
        };
        
        $scope.removeThing = function(id) {
            ThingService.remove($scope.view.thing, id);
        };
        
        $scope.removeThingFromDetail = function() {
            ThingService.remove($scope.view.thing, $scope.thing.$id);
            $location.path('#/' + $scope.view.returnFromDeleteTo)
        };
          
        $scope.updateThing = function() {
            ThingService.update($scope.thing);
            $scope.updateMode = false;
        };
          
        $scope.setUpdateMode = function(val) {
            $scope.updateMode = val;
        };
        
    }]);