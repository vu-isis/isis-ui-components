/*globals define, angular, alert, console*/

define( [
  'text!./templates/itemStats.html',

  'angular',
  'moment',
  'angular-moment-js'

], function ( template ) {

  "use strict";

  angular.module(
      'isis.ui.itemList.item.stats',
      [ 'angular-moment' ]
    ).directive(
    'itemStats',
    function () {

      return {
        scope: false,
        restrict: 'E',
        replace: true,
        template: template,
        require: '^itemList'
      };
    } );


} );
