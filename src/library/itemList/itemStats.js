/*globals angular*/
'use strict';

require( 'moment' );
require( 'angular-moment' );



angular.module(
  'isis.ui.itemList.item.stats', [ 'angular-moment' ]
)
  .directive(
    'itemStats',
    function () {

      return {
        scope: false,
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/itemStats.html',
        require: '^itemList'
      };
    } );