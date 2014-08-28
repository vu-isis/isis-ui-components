/*globals define, angular, alert, console*/

define( [
  'text!./templates/itemMenu.html',

  'angular'
], function ( template ) {

  "use strict";

  angular.module(
      'isis.ui.itemList.item.menu',
      [
        'isis.ui.itemList.item',
        'ui.sortable'
      ]
    ).directive(

    'itemMenu',

    function () {

      return {
        restrict: 'E',
        replace: true,
        template: template,
        require: '^itemList'
      };


    });
});
