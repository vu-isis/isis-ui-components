/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.valueWidgets.demo', [ 'isis.ui.valueWidgets' ] );

demoApp.controller( 'ValueWidgetsDemoController', function ($scope) {

  var onValueChange;

  onValueChange = function() {
    console.log('Value changed.');
  };

  $scope.valuesToRender = [ true ];

  $scope.widgets = [

    {
      name: 'stringWidget',
      value: 'Shorter than 20?',
      config: {
        placeHolder: 'Enter something',
        valueChange: onValueChange,
        validators: {
          shorterThanTen: function(modelValue, viewValue) {
            var value = modelValue || viewValue;
            return angular.isString(value) && value.length < 20;
          }
        }
      }
    }

  ];

} );