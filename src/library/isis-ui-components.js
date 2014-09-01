/*globals angular*/

require( './simpleDialog/simpleDialog.js' );
require( './hierarchicalMenu/hierarchicalMenu.js' );
require( './contextmenu/contextmenu.js' );
require( './dropdownNavigator/dropdownNavigator.js' );

angular.module( 'isis.ui.components', [
  'isis.ui.components.templates',

  'isis.ui.simpleDialog',
  'isis.ui.hierarchicalMenu',
  'isis.ui.contextmenu',
  'isis.ui.dropdownNavigator'
] );