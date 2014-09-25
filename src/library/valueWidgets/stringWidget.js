/*globals angular*/

'use strict';

require( '../services/isisUIServices.js' );

angular.module(
'isis.ui.stringWidget', [ 'isis.ui.services', 'ui.utils' ]

)
.controller(
'StringWidgetController', function () {
}
)
.directive(
'stringWidget', [ 'isisTemplateService', '$compile',
  function () {

    var defaultTemplateUrl = '/isis-ui-components/templates/stringWidget.html';

    return {
      restrict: 'E',
      replace: true,
      require: '^ngModel',
      controller: 'StringWidgetController',
      link: function ( scope, element ) {
        scope.getAndCompileWidgetTemplate( element, defaultTemplateUrl );
      }

    };
  }
] );