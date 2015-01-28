var app = angular.module("meanClean", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/partials/home.ejs"
        });

    $urlRouterProvider.otherwise("/");

})