/*globals angular*/
'use strict';

require( './itemListItem.js' );
require( 'ng-sortable' );

angular.module(
  'isis.ui.itemList.itemGroup', [
    'isis.ui.itemList.item',
    'ui.sortable'
  ]
)
  .directive(
    'listItemGroup',
    function ( $compile ) {

      return {
        require: '^itemList',
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/listItemGroup.html',
        link: function ( scope, element ) {
          if ( scope.listData && scope.listData.config && scope.listData.config.sortable ===
            true ) {
            element.attr( 'ui-sortable', 'sortableOptions' );
            element.attr( 'ng-model', 'listData.items' );
            $compile( element )( scope );
          }
        }
      };
    } );