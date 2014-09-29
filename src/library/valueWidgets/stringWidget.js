/*globals angular*/

'use strict';

angular.module(

'isis.ui.stringWidget', [ 'isis.ui.services', 'ui.utils' ]
)
.controller(
'StringWidgetController', function ($scope) {


  $scope.getDisplayValue = function() {
    var displayValue;

    displayValue = $scope.myValue.value || $scope.modelConfig.placeHolder || '';

    return displayValue;
  };

  if ($scope.widgetConfig.mask) {
    $scope.placeHolder = undefined;
  }


})
.directive(
'stringWidget', [ 'valueWidgetsService',
  function (valueWidgetsService) {

    var defaultTemplateUrl = '/isis-ui-components/templates/stringWidget.html';

    return {
      restrict: 'E',
      scope: true,
      replace: true,
      require: '^ngModel',
      controller: 'StringWidgetController',
      link: function ( scope, element, attributes, ngModel ) {

        scope.myValue = {

        };

        valueWidgetsService.getAndCompileWidgetTemplate( element, scope, defaultTemplateUrl );


        ngModel.$formatters.push(function(modelValue) {
          return modelValue;
        });

        ngModel.$render = function() {
          scope.myValue.value = ngModel.$viewValue;
        };

        ngModel.$parsers.push(function(viewValue) {
          return viewValue;
        });

        scope.$watch('myValue.value', function(val) {
          ngModel.$setViewValue(val);
        });

        ngModel.$render();

      }

    };
  }
] );