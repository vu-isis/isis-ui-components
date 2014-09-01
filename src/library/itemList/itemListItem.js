/*globals angular*/
'use strict';

require( './itemStats.js' );
require( './itemMenu.js' );

angular.module(
  'isis.ui.itemList.item', [
    'isis.ui.itemList.item.stats',
    'isis.ui.itemList.item.menu'
  ]
)
  .directive(
    'itemListItem',
    function () {

      return {
        scope: {
          item: '=',
          config: '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/itemListItem.html'
      };
    }
);