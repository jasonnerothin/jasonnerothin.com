'use strict';

/* App Module */

angular.module('skillcat', ['skillcatFilters', 'skillcatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/skills', {templateUrl: 'partials/skill-list.html',   controller: SkillListCtrl}).
      when('/skills/:skillId', {templateUrl: 'partials/skill-detail.html', controller: SkillDetailCtrl}).
      otherwise({redirectTo: '/skills'});
}]);
