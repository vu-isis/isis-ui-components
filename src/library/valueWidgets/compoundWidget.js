/*globals angular*/


'use strict';

angular.module(
  'isis.ui.compoundWidget', [ 'isis.ui.services' ]

)
  .directive(
    'compoundWidget', [ 'isisTemplateService', '$compile',
      function ( isisTemplateService, $compile ) {

        var defaultTemplateUrl = '/isis-ui-components/templates/compoundWidget.html';

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