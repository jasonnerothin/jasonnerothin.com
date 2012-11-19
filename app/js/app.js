'use strict';

/* App Module */

/** This file is pretty much where we do our DI **/

angular.module('skill', ['skillFilters', 'skillServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/skills', {templateUrl: 'partials/skill-list.html', controller: 'SkillListCtrl'}).
      when('/skills/:skillId', {templateUrl: 'partials/skill-detail.html', controller: 'SkillDetailCtrl'}).
      otherwise({redirectTo: '/gigs'});
}]);

angular.module('gig', ['gigServices']).
    config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/gigs', {templateUrl:'partials/gig-list.html', controller: 'GigListCtrl'}).
        when('/gigs/:gigId', {templateUrl: 'partials/gig-detail.html', controller: 'GigDetailCtrl'}).
        otherwise({redirectTo: '/gigs'});
}]);

angular.module('simple', [])
    .config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/bio',{templateUrl:'partials/bio.html',controller:'BioCtrl'}).
        when('/edu',{templateUrl:'partials/edu.html',controller:'EduCtrl'}).
        when('/contact',{templateUrl:'partials/contact.html',controller:'ContactCtrl'}).
        when('/portfolio',{templateUrl:'partials/portfolio.html', controller:'PortfolioCtrl'}).
        otherwise({redirectTo:'/gigs'});
}]);

var myApp = angular.module('myApp', ['skill','gig','simple']);

var popout = function(addr){
    window.open(addr,'howdy','width=800,height=600,top=250,left=150');
};