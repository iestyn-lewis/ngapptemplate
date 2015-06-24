angular
    .module('app')
    .directive('itemList', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/items/list.html'
        };
    })
;