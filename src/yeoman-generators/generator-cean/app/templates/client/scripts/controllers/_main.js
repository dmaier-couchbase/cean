'use strict';

/**
 * @ngdoc function
 * @name <%= _.slugify(_.humanize(appname)) %>.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cbDemoQaApp
 */
var app = angular.module('<%= _.slugify(_.humanize(appname)) %>');

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
