'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('skill App', function() {

  it('should redirect index.html to index.html#/skills', function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/skills');
  });


  describe('Skill list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/skills');
    });


    it('should filter the skill list as user types into the search box', function() {
      expect(repeater('.skills li').count()).toBe(47);

      input('query').enter('scala');
      expect(repeater('.skills li').count()).toBe(2);

        input('query').enter('scalab');
      expect(repeater('.skills li').count()).toBe(1);

      input('query').enter('web');
      expect(repeater('.skills li').count()).toBe(8);
    });


    it('should be possible to control skill order via the drop down select box', function() {
      input('query').enter('proto'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.skills li', 'Skill List').column('skill.skillName')).
          toEqual(["prototype.js"]);

      select('orderProp').option('Alphabetical');

      input('query').enter('java'); // programming languages, for example

      expect(repeater('.skills li', 'Skill List').column('skill.skillName')).
          toEqual(["JavaScript", "java"]);
    });


    it('should render skill specific links', function() {
      input('query').enter('javas');
      element('.skills li a').click();
      expect(browser().location().url()).toBe('/skills/javascript');
    });

  });


  describe('Skill detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/skills/amazon-ec2');
    });


    it('should display amazon-ec2 page', function() {
      expect(binding('skill.skillId')).toBe('Amazon Elastic Compute Cloud');
    });

  });
});
