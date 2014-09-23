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
      tableData: '=',
      config: '='
    },
    controller: 'DecisionTableController',
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.html'

  };
})

.controller('DecisionTableController', function ($scope) {

  $scope.declarationsOptions = {
    data: 'declarationsData',
    columnDefs: $scope.tableData.declarations.columnDefs
  };

  $scope.decisionsOptions = {
    data: 'decisionsData',
    columnDefs: $scope.tableData.decisions.columnDefs
  };

})
.directive(
'decisionTableDeclarations',
function () {

  return {
    scope: {
      declarationsData: '=',
      declarationsOptions: '='
    },
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.declarations.html'

  };
})
.directive(
'decisionTableDecisions',
function () {

  return {
    scope: {
      decisionsData: '=',
      decisionsOptions: '='
    },
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.decisions.html'

  };
});

