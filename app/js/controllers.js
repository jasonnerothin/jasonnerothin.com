'use strict';

/* Controllers */

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
