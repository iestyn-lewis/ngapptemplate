angular
    .module("app")
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/pages/hello.html'
        })
        .when('/items', {
            templateUrl: 'templates/pages/items.html'
        })
        .otherwise({
            redirectTo: '/'
        })
        ;
   });