/*globals angular*/

'use strict';

angular.module(
'isis.ui.selectWidget', [ ]

)
.controller(
'SelectWidgetController', function ($scope) {

  $scope.getDisplayValue = function () {
    var displayValue;

    displayValue = ($scope.myValue.value && $scope.myValue.value.label) || $scope.modelConfig.placeHolder || '';

    return displayValue;
  };


})
.directive(
'selectWidget', [ 'valueWidgetsService',
  function (valueWidgetsService) {

    var defaultTemplateUrl = '/isis-ui-components/templates/selectWidget.html';

    return {
      restrict: 'E',
      scope: true,
      replace: true,
      require: '^ngModel',
      controller: 'SelectWidgetController',
      link: function (scope, element, attributes, ngModel) {

        scope.myValue = {

        };

        valueWidgetsService.getAndCompileWidgetTemplate(element, scope, defaultTemplateUrl);

        ngModel.$formatters.push(function (modelValue) {
          return modelValue;
        });

        ngModel.$render = function () {
          scope.myValue.value = ngModel.$viewValue;
        };

        ngModel.$parsers.push(function (viewValue) {
          return viewValue;
        });

        scope.$watch('myValue.value', function (val) {
          ngModel.$setViewValue(val);
        });

        ngModel.$render();

      }

    };
  }
])
.directive('multipleSelect', [ function () {

  return {
    restrict: 'A',
    scope: {
      multipleSelect: '=multipleSelect'
    },
    replace: true,
    link: function (scope, element, attributes) {

      scope.$watch('multipleSelect', function (value) {

        if (value) {
          attributes.$set('multiple', true);
        }

      });

    }
  };


}]);