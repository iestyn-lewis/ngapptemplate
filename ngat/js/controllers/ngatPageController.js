angular
    .module('app')
    .controller('ngatPageController', ['$scope', 'PAGES', '$routeParams', '$location',
      function($scope, PAGES, $routeParams, $location) {
          if (!$routeParams.page) {
              angular.forEach(PAGES, function(page, key) {
                  if (page.default) {
                    $routeParams.page = key;
                 }
              });  
          }
          $scope.page = PAGES[$routeParams.page];
          $scope.thing = {};
      }]);
