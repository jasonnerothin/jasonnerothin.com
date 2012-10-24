'use strict';

/* Services */

/* skills */
angular.module('skillcatServices', ['ngResource']).
    factory('Skill', function($resource){
  return $resource('skills/:skillId.json', {}, {
    query: {method:'GET', params:{skillId:'skills'}, isArray:true}
  });
});
/* gig related */
angular.module('gigServices', ['ngResource']).
    factory('Gig', function($resource){
   return $resource('gigs/:gigId.json', {}, {
       query: {method:'GET', params:{gigId:'gigs'}, isArray:true}
   });
});
