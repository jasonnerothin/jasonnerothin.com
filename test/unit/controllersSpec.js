'use strict';

/* jasmine specs for controllers go here */
describe('skill controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  beforeEach(module('skillServices'));


  describe('SkillListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('skills/skills.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller(SkillListCtrl, {$scope: scope});
    }));


    it('should create "skills" model with 2 skills fetched from xhr', function() {
      expect(scope.skills).toEqual([]);
      $httpBackend.flush();

      expect(scope.skills).toEqualData(
          [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('skillName');
    });
  });


  describe('SkillDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzSkillData = function() {
          return {
            name: 'skill xyz',
                images: ['image/url1.png', 'image/url2.png']
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('skills/xyz.json').respond(xyzSkillData());

      $routeParams.skillId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller(SkillDetailCtrl, {$scope: scope});
    }));


    it('should fetch skill detail', function() {
      expect(scope.skill).toEqualData({});
      $httpBackend.flush();

      expect(scope.skill).toEqualData(xyzSkillData());
    });
  });
});
