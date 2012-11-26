'use strict';

/* Controllers */

/* About my valuable skills... */
function SkillListCtrl($scope, Skill) {

    $scope.skills = Skill.query();
    $scope.orderProp = 'skillName';
    $scope.query = "";

    $scope.hasLink = function(skill){
        return angular.isDefined(skill.infoLink);
    };

}

function SkillDetailCtrl($scope, $routeParams, Skill) {

    $scope.skill = Skill.get({skillId:$routeParams.skillId}, function (skill) {
        $scope.skillName = skill.skillName;
        $scope.skillId = skill.skillId;
        $scope.experience = skill.experience;
        $scope.gigs = skill.gigs;
        $scope.categories = skill.categories;
        $scope.infoLink = skill.infoLink;
        $scope.categories = skill.categories;
        $scope.monthsExperience = skill.monthsExperience;
    });

    $scope.hasLink = function(){
        var def = angular.isDefined(Skill.infoLink);
        var hl = def && Skill.infoLink.length > 0 ;
        return hl;
    };

}

/* About the great gigs I've worked... */
function GigListCtrl($scope, Gig) {

    $scope.gigs = Gig.query();
    $scope.orderProp = 'name';
    $scope.query = "";

    $scope.isOverWith = function(idx){
        return $scope.gigs[idx].endDate == 0;
    };

}

function GigDetailCtrl($scope, $routeParams, Gig) {

    $scope.gig = Gig.get({gigId:$routeParams.gigId}, function (gig) {
        $scope.gigId = gig.gigId;
        $scope.gigName = gig.gigName;
        $scope.title = gig.title;
        $scope.employer = gig.employer;
        $scope.employerUrl = gig.employerUrl;
        $scope.blurb = gig.blurb;
        $scope.cityState = gig.cityState;
        $scope.methodology = gig.methodology;
        $scope.result = gig.result;
        $scope.startDate = gig.startDate;
        $scope.endDate = gig.endDate;
        $scope.skills = gig.skills;

        $scope.contributions = gig.contributions;
        $scope.leadership = gig.leadership;
        $scope.sdlcProcess = gig.sdlcProcess;
    });

    $scope.isOverWith = function(){
        return $scope.gig.endDate == 0;
    };

    $scope.contributed = function(){
        if( !angular.isDefined($scope.gig.contributions) ) return false;
        var len = $scope.gig.contributions.length;
        return len > 0;
    };

    $scope.lead = function(){
        if( !angular.isDefined($scope.gig.leadership) ) return false;
        var len = $scope.gig.leadership.length;
        return len > 0;
    };

    $scope.team = function(){
        var goTeam = angular.isDefined($scope.gig.team);
        return goTeam;
    };

    $scope.sdlc = function(){
        var sdlcProc = angular.isDefined($scope.gig.sdlcProcess);
        return sdlcProc;
    };

}

/* empty controllers for future use... */
function BioCtrl($scope) {
}

function PortfolioCtrl($scope) {
}

function EduCtrl($scope) {
}

function ContactCtrl($scope) {
}