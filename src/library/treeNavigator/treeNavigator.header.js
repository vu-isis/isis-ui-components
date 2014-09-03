/*globals angular*/

'use strict';

require('../contextmenu/contextmenu.js');

angular.module(
  'isis.ui.treeNavigator.header', [
    'isis.ui.contextmenu'
  ]

)
.directive(
  'treeNavigatorNodeHeader', function () {
    return {
      scope: false,
      require: '^treeNavigator',
      restrict: 'E',
      replace: true,
      templateUrl: '/isis-ui-components/templates/treeNavigator.header.html'

    };
  }
);