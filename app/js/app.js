'use strict';


// Declare app level module which depends on filters, and services
angular.module('ImageFile', [
  'ngRoute',
  'ImageFile.filters',
  'ImageFile.services',
  'ImageFile.directives',
  'ImageFile.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewimage', {templateUrl: 'partials/viewimage.html', controller: 'ViewImageController'});
  $routeProvider.when('/imageconverter', {templateUrl: 'partials/imageconverter.html', controller: 'ImageConverterController'});
  $routeProvider.otherwise({redirectTo: '/viewimage'});
}]);
