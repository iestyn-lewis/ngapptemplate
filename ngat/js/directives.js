angular
    .module('app')
    .directive('ngatView', function() {
        return {
            restrict: 'E',
            templateUrl: 'ngat/html/directives/ngat-view.html',
            scope: {
                id: '='
            }
        };
    })
    .directive('ngatInput', function() {
        return {
            restrict: 'E',
            templateUrl: 'ngat/html/directives/ngat-input.html'
        };
    })
    .directive('ngatField', function() {
        return {
            restrict: 'E',
            templateUrl: 'ngat/html/directives/ngat-field.html'
        };
    })
;