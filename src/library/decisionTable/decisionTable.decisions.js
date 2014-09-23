/*globals angular*/

'use strict';

var tableRowHeight = 31,
  tableHeaderHeight = 31;

angular.module(
'isis.ui.decisionTable.decisions', ['ngGrid']

)
.controller('DecisionTableDecisionsController', function ($scope) {

  $scope.getDecisionTableGridStyle = function() {

    var height = tableHeaderHeight + 'px';

    if (angular.isArray($scope.decisionsData)) {
      height = tableHeaderHeight + tableRowHeight * $scope.decisionsData.length + 'px';
    }

    return {
      height: height
    };
  };

  console.log($scope);

})
.directive(
'decisionTableDecisions',
function () {

  return {
    controller: 'DecisionTableDecisionsController',
    scope: {
      decisionsData: '=',
      decisionsOptions: '='
    },
    restrict: 'E',
    replace: true,
    templateUrl: '/isis-ui-components/templates/decisionTable.decisions.html'

  };
});

