/*globals angular*/

'use strict';

require( '../services/isisUIServices.js' );

angular.module(
  'isis.ui.stringWidget', [ 'isis.ui.services' ]

)
  .directive(
    'stringWidget', [ 'isisTemplateService', '$compile',
      function ( isisTemplateService, $compile ) {

        var defaultTemplateUrl = '/isis-ui-components/templates/stringWidget.html';

        return {
          restrict: 'E',
          replace: true,
          scope: {
            config: '=',
            value: '=',
            link: function ( scope, element ) {

              var templateUrl;

              templateUrl = scope.config && scope.config.templateUrl || defaultTemplateUrl;

              isisTemplateService.getTemplate( scope.config.template, templateUrl )
                .then( function ( template ) {
                  element.replaceWidth( $compile( template, scope ) );
                } );

            }
          }

        };
      }
    ] );