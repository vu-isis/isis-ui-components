/*globals angular*/

'use strict';

require('./checkboxWidget.js');
require('./compoundWidget.js');
require('./selectWidget.js');
require('./stringWidget.js');

var availableWidgets = {
  'string': [ 'stringWidget', 'string-widget' ],
  'compound': [ 'compoundWidget', 'compound-widget' ],
  'checkbox': [ 'checkboxWidget', 'checkbox-widget' ],
  'select': [ 'selectWidget', 'select-widget' ]
},
widgetModules = [];

angular.forEach(availableWidgets, function (value) {
  this.push('isis.ui.' + value[ 0 ]);
}, widgetModules);

angular.module('isis.ui.valueWidgets', widgetModules)
.factory('$valueWidgets', function () {
  var getWidgetElementForType;

  getWidgetElementForType = function (type) {

    var result = availableWidgets[ type ] && availableWidgets[ type ][ 1 ];

    if (!result) {
      result = 'string-widget';
    }

    return result;

  };

  return {
    getWidgetElementForType: getWidgetElementForType
  };
})
.controller('ValueWidgetController', function ($scope, isisTemplateService, $compile) {

  $scope.getAndCompileWidgetTemplate = function (widgetElement, defaultTemplateUrl) {

    var templateUrl,
    templateElement;

    templateUrl = $scope.widgetConfig && $scope.widgetConfig.templateUrl || defaultTemplateUrl;

    isisTemplateService.getTemplate($scope.widgetConfig.template, templateUrl)
    .then(function (template) {
      templateElement = angular.element(template);
      widgetElement.replaceWith(templateElement);
      $compile(templateElement)($scope);
    });
  };

})
.directive('valueWidget', [ '$log', '$compile', '$valueWidgets',
  function ($log, $compile, $valueWidgets) {

    return {
      restrict: 'E',
      replace: true,
      require: 'ngModel',
      templateUrl: '/isis-ui-components/templates/valueWidget.html',
      scope: {
        value: '=ngModel',
        widgetType: '=?',
        widgetConfig: '=?',
        widgetMode: '=?',
        name: '=name'
      },
      priority: 0,

      controller: 'ValueWidgetController',

      compile: function () {
        return {
          pre: function (scope) {

            if (!scope.widgetConfig) {
              scope.widgetConfig = {
                placeHolder: 'Enter a value'
              };
            }


            if (!scope.widgetMode) {
              scope.widgetMode = 'edit';
            }

          },
          post: function (scope, element, attributes, ngModel) {

            var
            widgetTemplateStr,
            widgetElement,
            widgetType,
            widgetDirective,
            newWidgetDirective,
            linkIt;

            if (scope.widgetConfig && angular.isObject(scope.widgetConfig)) {

              ngModel.$validators = ngModel.$validators || {};
              angular.extend(ngModel.$validators, scope.widgetConfig.validators);

            }

            console.log(ngModel.$validators);

            linkIt = function () {

              if (scope.widgetType) {
                widgetType = scope.widgetType;
              } else {

                if (typeof scope.value === 'boolean') {
                  widgetType = 'checkbox';
                }

              }

              newWidgetDirective = $valueWidgets.getWidgetElementForType(widgetType);

              if (widgetDirective !== newWidgetDirective) {

                widgetDirective = newWidgetDirective;

                widgetTemplateStr = '<' + widgetDirective + '>' +
                '</' + widgetDirective + '>';

                $log.log(widgetTemplateStr);

                widgetElement = angular.element(widgetTemplateStr);

                element.empty();
                element.append(widgetElement);
                $compile(widgetElement)(scope);

              }

            };

            scope.$watch('value', function (newVal, oldVal) {

              if (scope.widgetMode === 'edit') {

                console.log(ngModel);

                if (angular.isFunction(scope.widgetConfig.valueChange)) {
                  scope.widgetConfig.valueChange(newVal, oldVal);
                }

              }

            });

            scope.$watch('widgetType', function () {
              linkIt();
            });

            scope.$watch('widgetMode', function () {
              linkIt();
            });

          }
        };
      }
    };

  }
]);