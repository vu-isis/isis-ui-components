/*globals angular*/


'use strict';

angular.module(
'isis.ui.decisionTable', ['ngGrid']

)
.directive(
'decisionTable',
function () {

  return {
    scope: {
      declarations: '=',
      table: '='
    },
    controller: 'DecisionTableController',
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.html'

  };
})
.controller('DecisionTableController', function ($scope) {

  $scope.declarationsOptions = {
    data: 'declarations.data',
    columnDefs: $scope.declarations.columnDefs
  };

  $scope.tableOptions = {
    data: 'table.data',
    columnDefs: $scope.table.columnDefs
  };

  console.log('declarationsOptions', $scope.declarationsOptions);
  console.log($scope.declarations.data);
  console.log('tableOptions', $scope.tableOptions);
  console.log($scope.table.data);

})
.directive(
'decisionTableDeclarations',
function () {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.declarations.html'

  };
})
.directive(
'decisionTableTable',
function () {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.table.html'

  };
});

