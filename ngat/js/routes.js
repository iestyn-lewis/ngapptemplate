angular
    .module("app")
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/NGAT/:page/:id', {
            templateUrl: 'ngat/html/directives/ngat-page.html'
        })
        .when('/NGAT/:page', {
            templateUrl: 'ngat/html/directives/ngat-page.html'
        })
        .when('/NGAT/:page/filter/:filter/:filterid', {
            templateUrl: 'ngat/html/directives/ngat-page.html'
        })
        .when('/NGAT', {
            templateUrl: 'ngat/html/directives/ngat-page.html'
        })
        ;
   });