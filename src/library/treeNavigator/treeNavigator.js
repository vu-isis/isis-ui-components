/*globals angular*/

'use strict';

angular.module(
  'isis.ui.treeNavigator',
  [
    'isis.ui.contextMenu',
    'isis.ui.directives'
  ]

).directive(
  'treeNavigator',function () {
    return {
        scope: {
          treeData: '=',
          config: '=',
          contextMenuData: '=',
          state: '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/treeNavigator.html'

      };
  }
);