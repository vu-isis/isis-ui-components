/*globals define, angular, alert, console*/

define([
  'text!./templates/listItemGroup.html',

  'angular',
  'moment',
  'angular-moment-js',
  './itemListItem',
  'ng-sortable'

], function (template) {

  "use strict";

  angular.module(
    'isis.ui.itemList.itemGroup', [
      'isis.ui.itemList.item',
      'ui.sortable'
    ]
  ).directive(
    'listItemGroup',
    function ($compile) {

      return {
        require: '^itemList',
        restrict: 'E',
        replace: true,
        template: template,
        link: function (scope, element, attributes, controller) {
          if (scope.listData && scope.listData.config && scope.listData.config.sortable === true) {
            element.attr('ui-sortable', 'sortableOptions');
            element.attr('ng-model', 'listData.items');
            $compile(element)(scope);
          }
        }
      };
    });


});