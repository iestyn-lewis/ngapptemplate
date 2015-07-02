angular
    .module("app")
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/NGAT'
        })
        ;
   });