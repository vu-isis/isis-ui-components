/*globals define, angular, alert, console*/

define([
  'text!./templates/itemListItem.html',

  'angular',
  './itemStats',
  './itemMenu'

], function (template) {

  "use strict";

  angular.module(
    'isis.ui.itemList.item', [
      'isis.ui.itemList.item.stats',
      'isis.ui.itemList.item.menu'
    ]
  ).directive(
    'itemListItem',
    function () {

      return {
        scope: {
          item: '=',
          config: '='
        },
        restrict: 'E',
        replace: true,
        template: template
      };
    });


});