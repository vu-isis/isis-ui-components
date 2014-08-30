/*globals console, angular*/

'use strict';

var demoApp = angular.module('isis.ui.contextmenu.demo', ['isis.ui.contextmenu']);

demoApp.controller('ContextmenuDemoController', function ($scope, contextmenuService) {

  var menuData = [
    {
      id: 'top',
      items: [
        {
          id: 'newProject',
          label: 'New project ...',
          iconClass: 'glyphicon glyphicon-plus',
          action: function () {
            console.log('New project clicked');
          },
          actionData: {}
        },
        {
          id: 'importProject',
          label: 'Import project ...',
          iconClass: 'glyphicon glyphicon-import',
          action: function () {
            console.log('Import project clicked');
          },
          actionData: {}
        }
      ]
    },
    {
      id: 'projects',
      label: 'Recent projects',
      totalItems: 20,
      items: [],
      showAllItems: function () {
        console.log('Recent projects clicked');
      }
    },
    {
      id: 'preferences',
      label: 'preferences',
      items: [
        {
          id: 'showPreferences',
          label: 'Show preferences',
          action: function () {
            console.log('Show preferences');
          },
          menu: [
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
                          label: 'Sub preferences 2'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  $scope.menuConfig1 = {
    triggerEvent: 'click',
    position: 'right bottom'
  };

  $scope.menuConfig2 = {
    triggerEvent: 'mouseover',
    position: 'left bottom',
    contentTemplateUrl: 'contextmenu-custom-content.html',
    doNotAutoClose: true
  };

  $scope.menuData = menuData;

  $scope.customData = {

    closeClick: function () {
      console.log('closing this manuyally');
      contextmenuService.close();
    }
  };

});

