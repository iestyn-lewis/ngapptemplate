angular
    .module('app')
    .directive('ngatNavigation', function() {
        return {
            restrict: 'E',
            templateUrl: 'ngat/html/directives/ngat-navigation.html'
        };
    })
    .directive('ngatPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'ngat/html/directives/ngat-page.html',
            scope: {
                id: '='
            }
        };
    })
    .directive('ngatView', function() {
        return {
            restrict: 'E',
            templateUrl: 'ngat/html/directives/ngat-view.html',
            scope: {
                id: '=',
                page: '='
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