angular
    .module("app")
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/pages/hello.html'
        })
        .when('/recipes', {
            templateUrl: 'html/pages/recipes.html'
        })
        .when('/recipe/:id', {
            templateUrl: 'html/pages/recipe.html'
        })
        .when('/config', {
            templateUrl: 'html/pages/config.html'
        })
        .otherwise({
            redirectTo: '/recipes'
        })
        ;
   });