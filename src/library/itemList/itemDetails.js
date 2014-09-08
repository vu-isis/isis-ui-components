/*globals angular*/
'use strict';

angular.module(
'isis.ui.itemList.item.details', []
)
.controller('ItemListItemDetailsController', function($scope) {

  $scope.expanded = false;

  $scope.getExpanderClass = function(item) {
    if (item.hasDetails) {
      if (item.detailsCollapsible) {
        if ($scope.expanded) {
          return 'glyphicon glyphicon-chevron-up';
        } else {
          return 'glyphicon glyphicon-chevron-down';
        }
      }
    }
  };


})
.directive(

'ilItemDetails',

function () {

  return {
    restrict: 'E',
    replace: true,
    require: '^itemList',
    controller: 'ItemListItemDetailsController',
    templateUrl: '/isis-ui-components/templates/itemDetails.html'
  };


} );