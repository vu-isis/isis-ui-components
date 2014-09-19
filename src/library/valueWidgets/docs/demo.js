/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.valueWidgets.demo', [ 'isis.ui.valueWidgets' ] );

demoApp.controller( 'ValueWidgetsDemoController', function ( $scope ) {

  var onValueChange,
  validators;

  onValueChange = function () {
    console.log( 'Value changed.' );
  };

  validators = {
    shorterThanTwenty: {
      id: 'shorterThanTwenty',
      errorMessage: 'This is not shorter than 20!',
      method: function ( modelValue, viewValue ) {
        var value = modelValue || viewValue;
        return angular.isString( value ) && value.length < 20;
      }
    }
  };

  $scope.widgets = [

    {
      value: 'Shorter than 20?',
      modelConfigEdit: {
        valueChange: onValueChange,
        validators: [ validators.shorterThanTwenty ]
      },
      modelConfigDisplay: {
        placeHolder: 'Enter something',
        valueChange: onValueChange,
        validators: [ validators.shorterThanTwenty ]
      },
      widgetType: 'stringWidget',
      widgetConfigEdit: {
        placeHolder: 'Enter something',
        label: 'stringWidget',
        errorMessagesEmbedded: true,
        tooltip: 'Enter something here. This value represents a very important something.'
      },
      widgetConfigDisplay: {
        placeHolder: 'Enter something',
        label: 'stringWidget'
      },
      inputConfig: {
        name: 'stringWidget',
        id: 'stringWidget'
      }
    }

  ];

} );