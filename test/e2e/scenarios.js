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
      expect(repeater('.skills li').count()).toBe(20);

      input('query').enter('nexus');
      expect(repeater('.skills li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.skills li').count()).toBe(8);
    });


    it('should be possible to control skill order via the drop down select box', function() {
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.skills li', 'Skill List').column('skill.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('Alphabetical');

      expect(repeater('.skills li', 'Skill List').column('skill.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('should render skill specific links', function() {
      input('query').enter('nexus');
      element('.skills li a').click();
      expect(browser().location().url()).toBe('/skills/nexus-s');
    });
  });


  describe('Skill detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/skills/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(binding('skill.name')).toBe('Nexus S');
    });


    it('should display the first skill image as the main skill image', function() {
      expect(element('img.skill').attr('src')).toBe('img/skills/nexus-s.0.jpg');
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.skill-thumbs li:nth-child(3) img').click();
      expect(element('img.skill').attr('src')).toBe('img/skills/nexus-s.2.jpg');

      element('.skill-thumbs li:nth-child(1) img').click();
      expect(element('img.skill').attr('src')).toBe('img/skills/nexus-s.0.jpg');
    });
  });
});
