/*globals angular*/

'use strict';

require( './treeNavigator.node.js' );

angular.module(
    'isis.ui.treeNavigator.nodeList',
    [ 'isis.ui.treeNavigator.node', 'isis.ui.treeNavigator.header' ]
  )

  .controller( 'TreeNavigatorController', function ( $scope, $log ) {
    $log.log( 'In TreeNavigatorController' );


  } )

  .directive(
  'treeNavigatorNodeList', function () {
    return {
      scope: {
        nodes: '='
      },
      require: '^treeNavigator',
      restrict: 'E',
      replace: true,
      templateUrl: '/isis-ui-components/templates/treeNavigator.nodeList.html'

    };
  }
);