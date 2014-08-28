/*globals define, angular, alert, console*/

define( [
  'angular',
  'text!./templates/filterInput.html',
  'css!./styles/filterInput.css',

  'ng-tags-input',

  'filters/filters'

], function ( ng, template ) {

  "use strict";

  angular.module(
      'isis.ui.filterInput',
      [
        'ngTagsInput',
        'isis.filters'
      ]
    ).directive(
    'filterInput',
    function () {

      return {
        scope: {
          config: '=',
          data: '='
        },
        restrict: 'E',
        replace: true,
        template: template,
        controller: function($scope, $filter) {

        }

      };
    } );

} );
