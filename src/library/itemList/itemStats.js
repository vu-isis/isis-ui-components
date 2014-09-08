/*globals angular*/
'use strict';

window.moment = window.moment || require( 'moment' );
require( 'angular-moment' );

angular.module(
  'isis.ui.itemList.item.stats', [ 'angularMoment' ]
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
    });