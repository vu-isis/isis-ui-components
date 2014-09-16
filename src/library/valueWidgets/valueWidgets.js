/*globals angular*/

'use strict';

require( './checkboxWidget.js' );
require( './compoundWidget.js' );
require( './selectWidget.js' );
require( './stringWidget.js' );

var availableWidgets = {
  'string': [ 'stringWidget', 'string-widget' ],
  'compound': [ 'compoundWidget', 'compound-widget' ],
  'checkbox': [ 'checkboxWidget', 'checkbox-widget' ],
  'select': [ 'selectWidget', 'select-widget' ]
},
widgetModules = [];

angular.forEach( availableWidgets, function ( value ) {
  this.push( 'isis.ui.' + value[ 0 ] );
}, widgetModules );

angular.module( 'isis.ui.valueWidgets', widgetModules )
.factory( '$valueWidgets', function () {
  var getWidgetElementForType;

  getWidgetElementForType = function ( type ) {

    var result = availableWidgets[ type ] && availableWidgets[ type ][ 1 ];

    if ( !result ) {
      result = 'string-widget';
    }

    return result;

  };

  return {
    getWidgetElementForType: getWidgetElementForType
  };
} )
.controller( 'ValueWidgetController', function ( $scope, isisTemplateService, $compile ) {

  $scope.getAndCompileWidgetTemplate = function ( widgetElement, defaultTemplateUrl ) {

    var templateUrl,
    templateElement;

    templateUrl = $scope.widgetConfig && $scope.widgetConfig.templateUrl || defaultTemplateUrl;

    isisTemplateService.getTemplate( $scope.widgetConfig.template, templateUrl )
    .then( function ( template ) {
      templateElement = angular.element( template );
      widgetElement.replaceWith( templateElement );
      $compile( templateElement )( $scope );
    } );
  };

} )
.directive( 'valueWidget', [ '$log', '$compile', '$valueWidgets',
  function ( $log, $compile, $valueWidgets ) {

    return {
      restrict: 'E',
      replace: true,
      require: 'ngModel',
      scope: {
        value: '=ngModel',
        widgetType: '=?',
        widgetConfig: '=?',
        widgetMode: '=?'
      },
      priority: 0,

      controller: 'ValueWidgetController',

      compile: function () {
        return {
          pre: function ( scope ) {

            if ( !scope.widgetConfig ) {
              scope.widgetConfig = {
                placeHolder: 'Enter a value'
              };
            }


            if ( !scope.widgetMode ) {
              scope.widgetMode = 'edit';
            }

          },
          post: function ( scope, element, attributes ) {

            var
            widgetTemplateStr,
            widgetElement,
            widgetType,
            widgetDirective,
            newWidgetDirective,
            linkIt;

            linkIt = function () {

              if ( scope.widgetType ) {
                widgetType = scope.widgetType;
              } else {

                if ( typeof scope.value === 'boolean' ) {
                  widgetType = 'checkbox';
                }

              }

              newWidgetDirective = $valueWidgets.getWidgetElementForType( widgetType );

              if ( widgetDirective !== newWidgetDirective ) {

                widgetDirective = newWidgetDirective;

                widgetTemplateStr = '<' + widgetDirective + '>' +
                '</' + widgetDirective + '>';

                $log.log( widgetTemplateStr );

                widgetElement = angular.element( widgetTemplateStr );

                element.replaceWith( widgetElement );
                $compile( widgetElement )( scope );

              }

            };

            scope.$watch( 'value', function (newVal, oldVal) {

              if (scope.widgetMode === 'edit' && newVal !== oldVal) {

                linkIt();

                if (angular.isFunction(scope.widgetConfig.valueChange)) {
                  scope.widgetConfig.valueChange(newVal, oldVal);
                }

              }

            } );

            scope.$watch( 'widgetType', function () {
              linkIt();
            } );

            scope.$watch( 'widgetMode', function () {
              linkIt();
            } );

          }
        };
      }
    };

  }
] );