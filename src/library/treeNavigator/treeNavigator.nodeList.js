/*globals angular*/

'use strict';

require( './treeNavigator.node.js' );
require( '../helpers/angular-recursion.js' );

angular.module(
'isis.ui.treeNavigator.nodeList',
[
  'isis.ui.treeNavigator.node',
  'RecursionHelper'
]
)

.directive(
'treeNavigatorNodeList', function (RecursionHelper) {
  return {
    scope: {
      nodes: '='
    },
    require: '^treeNavigator',
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/treeNavigator.nodeList.html',
    compile: function ( element ) {
      return RecursionHelper.compile( element );
    }

  };
}
);