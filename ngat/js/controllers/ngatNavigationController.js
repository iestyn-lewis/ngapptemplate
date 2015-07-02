angular
    .module('app')
    .controller('ngatNavigationController', ['$scope', 'NAVIGATION', 
      function($scope, NAVIGATION) {
          $scope.menuItems = NAVIGATION;
      }]);
