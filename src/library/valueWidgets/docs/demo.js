/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.valueWidgets.demo', [ 'isis.ui.valueWidgets' ] );

demoApp.controller( 'ValueWidgetsDemoController', function ( $scope ) {

  var onValueChange,
  validators;

  onValueChange = function (val) {
    console.log( 'Value changed:', val);
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
      model: 'A string',
      modelConfigEdit: {
        validators: [ validators.shorterThanTwenty ],
        placeHolder: 'Enter something shorter than 20',
        modelChange: onValueChange
      },
      modelConfigDisplay: {
        modelChange: onValueChange,
        validators: [ validators.shorterThanTwenty ]
      },
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
        placeHolder: 'Enter something',
        modelChange: onValueChange
      },
      modelConfigDisplay: {
        modelChange: onValueChange,
        validators: [ validators.shorterThanTwenty ]
      },
      widgetType: 'string',
      widgetConfigEdit: {
        label: 'stringWidget - multiline',
        errorMessagesEmbedded: true,
        tooltip: 'Enter something here. This value represents a very important something.',
        multiLine: true,
        rows: 6
      },
      widgetConfigDisplay: {
        label: 'stringWidget - multiline'
      },
      inputConfig: {
        name: 'stringWidget',
        id: 'stringWidget'
      }
    },

    {
      model: true,
      modelConfigEdit: {
        validators: [ ],
        modelChange: onValueChange
      },
      modelConfigDisplay: {
        modelChange: onValueChange,
        validators: []
      },

      widgetConfigEdit: {
        label: 'checkboxWidget:',
        errorMessagesEmbedded: true,
        tooltip: 'Click it'
      },
      widgetConfigDisplay: {
        label: 'checkboxWidget:'
      },
      inputConfig: {
        name: 'checkboxWidget',
        id: 'checkboxWidget'
      }
    }


  ];

} );