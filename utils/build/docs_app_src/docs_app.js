'use script';

/*globals angular, require*/

var components = [
  'simpleDialog'
//  'dropDownNavigator',
//  'hierarchicalMenu'
];

require( 'angular-markdown-directive' );
//require('../../../src/simpleDialog/docs/demo.js');

angular.module('templates', []);

angular.module(
    'demoApp',
    [
      'btford.markdown',
      'templates'
    ]
  ).controller(
  'UIComponentsDemoController',
  function ( $scope ) {

    $scope.components = components.map( function ( component ) {
      return {
        name: component,
        template: '../' + component + '/docs/demo.html',
        docs: '../' + component + '/docs/readme.md'
      };
    } );

  } );