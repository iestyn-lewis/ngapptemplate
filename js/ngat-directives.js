angular
    .module('app')
    .directive('ngatView', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/ngat_directives/ngat-view.html',
            scope: {
                id: '='
            }
        };
    })
    .directive('ngatInput', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/ngat_directives/ngat-input.html'
        };
    })
    .directive('ngatField', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/ngat_directives/ngat-field.html'
        };
    })
;