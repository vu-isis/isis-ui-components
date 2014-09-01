/*globals console, angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.treeNavigator.demo', [ 'ui.bootstrap' ] );

demoApp.controller( 'TreeNavigatorDemoController', function ( $scope ) {

  var config;

  config = {
    scopeMenu: [
      {
        items: [
          {
            id: 'project',
            label: 'Project Hierarchy',
            action: function () {
              $scope.state.activeScope = 'project';
              $scope.config.selectedScope = $scope.config.scopeMenu[0].items[0];
            }
          },
          {
            id: 'composition',
            label: 'Composition',
            action: function () {
              $scope.state.activeScope = 'composition';
              $scope.config.selectedScope = $scope.config.scopeMenu[0].items[1];
            }
          }
        ]
      }

    ],

    scopeMenuConfig: {
      triggerEvent: 'click',
      position: 'left bottom'
    },

    preferencesMenuConfig: {
      triggerEvent: 'click',
      position: 'right bottom'
    },

    selectedScope: null,

    preferencesMenu: [
      {
        items: [
          {
            id: 'preferences 1',
            label: 'Preferences 1'
          },

          {
            id: 'preferences 2',
            label: 'Preferences 2'
          },

          {
            id: 'preferences 3',
            label: 'Preferences 3',
            menu: [
              {
                items: [
                  {
                    id: 'sub_preferences 1',
                    label: 'Sub preferences 1'
                  },
                  {
                    id: 'sub_preferences 2',
                    label: 'Sub preferences 2',
                    action: function ( data ) {
                      console.log( data );
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    collapsedIconClass: 'icon-arrow-right',
    expandedIconClass: 'icon-arrow-down',
    showRootLabel: true

  };

  $scope.config = config;

} );