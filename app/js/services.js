'use strict';

/* Services */

angular.module('skillcatServices', ['ngResource']).
    factory('Skill', function($resource){
  return $resource('skills/:skillId.json', {}, {
    query: {method:'GET', params:{skillId:'skills'}, isArray:true}
  });
});
