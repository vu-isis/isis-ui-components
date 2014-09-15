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
  .directive( 'valueWidget', [ '$log', '$compile', '$valueWidgets',
    function ( $log, $compile, $valueWidgets ) {

      return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        scope: {
          config: '=',
          value: '='
        },

        controller: 'ValueWidgetController',

        compile: function () {
          return {
            pre: function ( scope ) {

              if ( !scope.config ) {
                scope.config = {
                  mode: 'edit'
                };
              }

            },
            post: function ( scope, element, attributes, ngModel ) {

              var
              templateStr,
                template,
                widgetType,
                widgetElement;

              if ( angular.isObject( scope.value ) ) {

                if ( angular.isObject( scope.value.widget ) ) {
                  widgetType = scope.value.widget.type;
                } else {


                  if ( typeof scope.value.value === 'boolean' ) {
                    widgetType = 'checkbox';
                  }

                }

              }


              widgetElement = $valueWidgets.getWidgetElementForType( widgetType );

              templateStr = '<' + widgetElement + '>' +
                '</' + widgetElement + '>';

              $log.log( templateStr );

              template = angular.element( templateStr );

              element.append( $compile( template )( scope ) );

              console.log(ngModel.$viewValue);

            }
          };
        }
      };

    }
  ] );