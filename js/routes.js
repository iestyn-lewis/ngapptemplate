angular
    .module("app")
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/pages/hello.html'
        })
        .when('/recipes', {
            templateUrl: 'templates/pages/recipes.html'
        })
        .when('/recipe/:id', {
            templateUrl: 'templates/pages/recipe.html'
        })
        .when('/config', {
            templateUrl: 'templates/pages/config.html'
        })
        .otherwise({
            redirectTo: '/recipes'
        })
        ;
   });