'use strict';

/* App Module */

/** This file is pretty much where we do our DI **/

angular.module('skillcat', ['skillcatFilters', 'skillcatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/skills', {templateUrl: 'partials/skill-list.html',   controller: 'SkillListCtrl'}).
      when('/skills/:skillId', {templateUrl: 'partials/skill-detail.html', controller: 'SkillDetailCtrl'}).
      otherwise({redirectTo: '/skills'});
}]);

angular.module('gig', ['gigServices']).
    config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/gigs', {templateUrl:'partials/gig-list.html', controller: 'GigListCtrl'}).
        when('/gigs/:gigId', {templateUrl: 'partials/gig-detail.html', controller: 'GigDetailCtrl'}).
        otherwise({redirectTo: '/skills'});
}]);

var myApp = angular.module('myApp', ['skillcat','gig'])