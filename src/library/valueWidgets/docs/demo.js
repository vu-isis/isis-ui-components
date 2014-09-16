/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.valueWidgets.demo', [ 'isis.ui.valueWidgets' ] );

demoApp.controller( 'ValueWidgetsDemoController', function ($scope) {

  var onValueChange;

  onValueChange = function(newVal, oldVal) {
    console.log('Value changed:', newVal, oldVal);
  };

  $scope.valuesToRender = [ true ];

  $scope.widgets = [

    {
      name: 'stringWidget',
      value: 'A line of text',
      config: {
        placeHolder: 'Enter something',
        valueChange: onValueChange
      }
    }

  ];

} );