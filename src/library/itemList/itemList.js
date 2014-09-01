/*globals angular*/
'use strict';

require( './listItemGroup.js' );
require( './itemListNew.js' );

angular.module(
  'isis.ui.itemList', [
    'isis.ui.itemList.newItem',
    'isis.ui.filterInput',
    'isis.ui.itemList.itemGroup'
  ]
)
  .directive(
    'itemList',
    function () {

      return {
        scope: {
          listData: '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/itemList.html',
        controller: function ( $scope ) {
          $scope.sortableOptions = {
            update: function ( e, ui ) {

              if ( $scope.listData.config && angular.isFunction( $scope.listData.config.onSort ) ) {
                $scope.listData.config.onSort( e, ui );
              }

            },
            axis: 'y'
          };
        }


      };
    }
);