# jasonnerothin.com

## Overview

This application has been hi-jacked for purposes of building out jasonnerothin.com.

## Prerequisites

### Node.js
- Node.js is a javascript-powered web server that does lots of cool stuff.
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]

### Java
- http://www.java.com

## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- This application started its life with no backend (no server). Instead we faked the XHRs by 
  fetching static json files. At this time, we are fetching json data from a RESTful webservice
  instead.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.

## Development with angular-seed

The following docs apply to all angular-seed projects and since the phonecat tutorial is a project
based on angular-seed, the instructions apply to it as well.

### Running the app during development

1. run `./scripts/web-server.js`
2. navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your
   browser.

### Running unit tests

Requires java.

1. start `./scripts/test-server.sh` 
2. navigate your browser to `http://localhost:9876/`
3. click on: capture strict link
4. run `scripts/test.sh` 
5. edit files in `app/` or `src/` and save them
6. go to step 4.


### Continuous unit testing

Requires ruby and [watchr](https://github.com/mynyml/watchr) gem.

1. start JSTD server and capture a browser as described above
2. start watchr with `watchr scripts/watchr.rb`
3. in a different window/tab/editor `tail -f logs/jstd.log`
4. edit files in `app/` or `src/` and save them
5. watch the log to see updates


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Testacular](vojtajina.github.com/testacular) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/testacular.conf.js        --> config file for running unit tests with Testacular
    config/testacular-e2e.conf.js    --> config file for running e2e tests with Testacular

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Testacular (*nix)
      test.sh           --> autotests unit tests with Testacular (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/#!guide.di
[directive]: http://docs.angularjs.org/#!angular.directive
[$filter]: http://docs.angularjs.org/#!angular.Array.filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ng:repeat]: http://docs.angularjs.org/#!angular.widget.@ng:repeat
[ng:view]: http://docs.angularjs.org/#!angular.widget.ng:view
[node-mac]: http://code.google.com/p/rudix/downloads/detail?name=node-0.4.0-0.dmg&can=2&q=
[node-generic]: https://github.com/joyent/node/wiki/Installation
[java]: http://www.java.com
[$resource]: http://docs.angularjs.org/#!angular.service.$resource
[$rouet]: http://docs.angularjs.org/#!angular.service.$route
[service]: http://docs.angularjs.org/#!angular.service
[$xhr]: http://docs.angularjs.org/#!angular.service.$xhr
