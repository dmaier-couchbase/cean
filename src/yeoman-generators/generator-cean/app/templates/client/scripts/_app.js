'use strict';

/**
 * @ngdoc overview
 * @name cbDemoQaApp
 * @description
 * # '<%= _.slugify(_.humanize(appname)) %>
 *
 * Main module of the application.
 */
var app = angular.module('<%= _.slugify(_.humanize(appname)) %>', [
    'ngCookies',
    'ngResource',
    'ngRoute'
]);

app.config(function($routeProvider) {
   
    $routeProvider
    .when('/', {
       templateUrl : 'views/main.html',
       controller : 'MyCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
