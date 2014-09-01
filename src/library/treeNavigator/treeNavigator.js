/*globals angular*/

'use strict';

angular.module(
  'isis.ui.treeNavigator', [
    'isis.ui.contextmenu'
  ]

)
  .controller('TreeNavigatorController', function($scope) {

  })

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