/*globals angular*/

'use strict';

require( './treeNavigator.nodeList.js' );
require( './treeNavigator.header.js' );
require( './treeNavigator.node.label.js' );

angular.module(
'isis.ui.treeNavigator',
[
  'isis.ui.treeNavigator.nodeList',
  'isis.ui.treeNavigator.header',
  'isis.ui.treeNavigator.node.label'
])

.controller( 'TreeNavigatorController', function ( $scope, $log ) {
  $log.log( 'In TreeNavigatorController' );


} )

.directive(
'treeNavigator', function () {
  return {
    scope: {
      treeData: '=',
      config: '=',
      contextMenuData: '=',
      state: '='
    },

    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/treeNavigator.html',
    controller: 'TreeNavigatorController'

  };
}
);