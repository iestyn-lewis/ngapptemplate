angular
    .module("app")
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/NGAT/:view/:id', {
            templateUrl: 'ngat/html/directives/ngat-view.html'
        })
        .when('/NGAT/:view', {
            templateUrl: 'ngat/html/directives/ngat-view.html'
        })
        .when('/NGAT/:view/filter/:filter/:filterid', {
            templateUrl: 'ngat/html/directives/ngat-view.html'
        })
        .when('/NGAT', {
            templateUrl: 'ngat/html/directives/ngat-view.html'
        })
        ;
   });