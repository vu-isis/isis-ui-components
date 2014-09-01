/*globals angular*/
'use strict';

require( './itemListItem.js' );

angular.module(
  'isis.ui.itemList.item.menu', [
    'isis.ui.itemList.item'
  ]
)
  .directive(

    'itemMenu',

    function () {

      return {
        restrict: 'E',
        replace: true,
        require: '^itemList'
      };


    } );