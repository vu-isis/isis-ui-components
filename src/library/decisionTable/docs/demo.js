/*globals angular*/
'use strict';

var demoApp = angular.module('isis.ui.decisionTable.demo', [ 'isis.ui.decisionTable' ]);

demoApp.service('decisionTableDataProvider', [function () {

  var dummyData;

  dummyData = {
    'declarations': [
      { 'ref': 'ref_e1', 'name': 'event'}
    ],
    'table': {
      'rows': [
        {'event1_a': 'true', 'action_1': 'X'},
        {'action_1': 'a=100', 'event1': 'a&lt;100'}
      ],
      'conditions': {
        'event1_a': {
          'index': 2,
          'exp': 'ref_e1.a'
        },
        'event1': {
          'index': 1,
          'exp': 'ref_e1'
        }
      },
      'actions': {
        'action_1': {
          'index': 1,
          'exp': 'Action.out'
        }
      }

    }
  };


  this.loadData = function () {
    var result;

    result = {
      declarations: {
        data: {},
        columnDefs: [
          {field: 'ref', displayName: 'Reference'},
          {field: 'name', displayName: 'Name'}
        ]
      },
      table: {
        data: {},
        columnDefs: []
      }
    };

    angular.forEach(dummyData, function () {

    });

    return result;
  };

}]);

demoApp.controller('DecisionTableDemoController', function ($scope, decisionTableDataProvider) {

  var config,
  initialData;

  config = {

  };

  initialData = decisionTableDataProvider.loadData();

  $scope.declarations = initialData.declarations;
  $scope.table = initialData.table;
  $scope.config = config;
});