/*globals define, angular, alert, console*/

define([
  'angular',
  'text!./templates/itemList.html',
  'css!./styles/itemList.css',

  './listItemGroup',
  './itemListNewItem',

  './filterInput'

], function (ng, template) {

  "use strict";

  angular.module(
    'isis.ui.itemList', [
      'isis.ui.itemList.newItem',
      'isis.ui.filterInput',
      'isis.ui.itemList.itemGroup'
    ]
  ).directive(
    'itemList',
    function () {

      return {
        scope: {
          listData: '='
        },
        restrict: 'E',
        replace: true,
        template: template,
        controller: function ($scope) {
          $scope.sortableOptions = {
            update: function (e, ui) {

              if ($scope.listData.config && angular.isFunction($scope.listData.config.onSort)) {
                $scope.listData.config.onSort(e, ui);
              }

            },
            axis: 'y'
          };
        }


      };
    });


});