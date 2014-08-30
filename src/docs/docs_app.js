/*globals angular, require*/
'use strict';

var components = [
  'simpleDialog',
  'hierarchicalMenu',
  'contextmenu',
  'dropdownNavigator'

];

require('../library/simpleDialog/docs/demo.js');
require('../library/hierarchicalMenu/docs/demo.js');
require('../library/contextmenu/docs/demo.js');
require('../library/dropdownNavigator/docs/demo.js');

require( 'angular-sanitize' );
window.Showdown = require( 'showdown' );
require( 'angular-markdown-directive' );


var demoApp = angular.module(
  'isis.ui.demoApp',
  [
    'isis.ui.demoApp.templates',
    'btford.markdown'
  ].concat(components.map( function( e ) { return 'isis.ui.' + e + '.demo';} ))
);

demoApp.run(function() {
  console.log('DemoApp run...');
});

demoApp.controller(
  'UIComponentsDemoController',
  function ( $scope ) {

    $scope.components = components.map( function ( component ) {
      return {
        name: component,
        template: '/library/' + component + '/docs/demo.html',
        docs: '/library/' + component + '/docs/readme.md'
      };
    } );

  } );
