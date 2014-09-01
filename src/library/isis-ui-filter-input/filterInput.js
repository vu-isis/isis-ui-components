/*globals angular*/

'use strict';

angular.module(
  'isis.ui.filterInput', [
    'ngTagsInput',
    'isis.filters'
  ]
)
  .directive(
    'filterInput',
    function () {

      return {
        scope: {
          config: '=',
          data: '='
        },
        restrict: 'E',
        replace: true,
        templateUrl: '/isis-ui-components/templates/filterInput.html',
        controller: function () {

        }

      };
    } );