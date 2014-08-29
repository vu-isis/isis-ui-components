/*globals angular, require*/

'use script';

var components = [
  'simpleDialog'
//  'dropDownNavigator',
//  'hierarchicalMenu'
];

require( 'angular-sanitize' );
window.Showdown = require( 'showdown' );
require( 'angular-markdown-directive' );

require('../library/simpleDialog/docs/demo.js');

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
