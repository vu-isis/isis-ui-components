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
        return !value || angular.isString( value ) && value.length < 20;
      }
    }
  };

  $scope.widgets = [

    {
      model: 'S',
      modelChange: onValueChange,
      modelConfigEdit: {
        validators: [ validators.shorterThanTwenty ],
        placeHolder: 'Enter something shorter than 20'
      },
      modelConfigDisplay: {
        modelChange: onValueChange,
        validators: [ validators.shorterThanTwenty ]
      },
      widgetType: 'stringWidget',
      widgetConfigEdit: {
        label: 'stringWidget',
        errorMessagesEmbedded: true,
        tooltip: 'Enter something here. This value represents a very important something.'
      },
      widgetConfigDisplay: {
        label: 'stringWidget'
      },
      inputConfig: {
        name: 'stringWidget',
        id: 'stringWidget'
      }
    },
    {
      model: 'The letter A stands for apple but can cause your brain melt. This is something you would not want to risk.',
      modelChange: onValueChange,
      modelConfigEdit: {
        validators: [ validators.shorterThanTwenty ],
        placeHolder: 'Enter something'
      },
      modelConfigDisplay: {
        modelChange: onValueChange,
        validators: [ validators.shorterThanTwenty ]
      },
      widgetType: 'stringWidget',
      widgetConfigEdit: {
        label: 'stringWidget - multiline',
        errorMessagesEmbedded: true,
        tooltip: 'Enter something here. This value represents a very important something.',
        multiLine: true,
        maxlength: 50,
        rows: 6
      },
      widgetConfigDisplay: {
        label: 'stringWidget - multiline'
      },
      inputConfig: {
        name: 'stringWidget',
        id: 'stringWidget'
      }
    }



  ];

} );