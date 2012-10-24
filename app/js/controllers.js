'use strict';

/* Controllers */

/* About my valuable skills... */
function SkillListCtrl($scope, Skill) {
  $scope.skills = Skill.query();
  $scope.orderProp = 'age';
}
//SkillListCtrl.$inject = ['$scope', 'Skill'];

function SkillDetailCtrl($scope, $routeParams, Skill) {
  $scope.skill = Skill.get({skillId: $routeParams.skillId}, function(skill) {
    $scope.mainImageUrl = skill.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
//SkillDetailCtrl.$inject = ['$scope', '$routeParams', 'Skill'];


/* About the great gigs I've worked... */
function GigListCtrl($scope, Gig){
    $scope.gigs = Gig.query();
    $scope.orderProp = 'time';
}
//GigListCtrl.$inject = ['$scope', '$routeParams', 'Gig'];
function GigDetailCtrl($scope, $routeParams, Gig){
    $scope.gig = Gig.get({gigId: $routeParams.gigId}, function(gig){
        $scope.gigId = gig.gigId;
        $scope.title = gig.title;
        $scope.employer = gig.employer;
        $scope.address = gig.address;
        $scope.methodology = gig.methodology;
        $scope.blurb = gig.blurb;
        $scope.results = gig.results;
        $scope.startDate = gig.startDate;
        $scope.endDate = gig.endDate;
        $scope.skills = gig.skills;
    });
}
//GigDetailCtrl.$inject = ['$scope', '$routeParams', 'Gig'];
