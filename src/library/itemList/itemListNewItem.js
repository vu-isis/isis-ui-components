/*globals define, angular, alert, console*/

define([
  'angular',
  'text!./templates/itemListNewItem.html',
  'css!./styles/itemListNewItem.css'

], function (ng, template) {

  "use strict";

  angular.module(
    'isis.ui.itemList.newItem', []
  ).directive(
    'itemListNewItem',
    function () {

      return {
        scope: {
          formConfig: '='
        },
        restrict: 'E',
        replace: true,
        template: template,
        require: '^itemList',
        compile: function () {

          return {

            pre: function ($scope, $el, attr, itemListCtl) {
              $scope.formConfig.controller = $scope.formConfig.controller || function () {
                return itemListCtl;
              };
            }

          };
        }
      };
    });


});