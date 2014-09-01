/*globals angular*/
'use strict';

angular.module(
  'isis.ui.itemList.newItem', []
)
  .directive(
    'itemListNewItem',
    function () {

      return {
        scope: {
          formConfig: '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/itemListNewItem.html',
        require: '^itemList',
        compile: function () {

          return {

            pre: function ( $scope, $el, attr, itemListCtl ) {
              $scope.formConfig.controller = $scope.formConfig.controller || function () {
                return itemListCtl;
              };
            }

          };
        }
      };
    } );