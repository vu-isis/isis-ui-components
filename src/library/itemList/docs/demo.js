/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.itemList.demo', [ 'isis.ui.itemList' ] );

demoApp.controller( 'ItemListDemoController', function ( $scope ) {


  var
  i,

  items = [],
  itemGenerator,
  getItemContextmenu,
  config;

  itemGenerator = function ( id ) {
    return {
      id: id,
      title: 'List item ' + id,
      toolTip: 'Open item',
      description: 'This is description here',
      lastUpdated: {
        time: Date.now(),
        user: 'N/A'

      },
      stats: [
        {
          value: id,
          tooltip: 'Orders',
          iconClass: 'fa fa-cubes'
        }
      ],
      details: null,
      detailsTemplate: null
    };
  };

  for ( i = 0; i < 20; i++ ) {
    items.push( itemGenerator( i ) );
  }

  getItemContextmenu = function ( item ) {

    var defaultItemContextmenu = [
      {
        items: [
          {
            id: 'create',
            label: 'Create new',
            disabled: true,
            iconClass: 'fa fa-plus',
          },
          {
            id: 'dummy',
            label: 'Just for test ' + item.id,

            actionData: item,

            action: function ( data ) {
              console.log( 'testing ', data );
            }

          },
          {
            id: 'rename',
            label: 'Rename'
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
                      console.log( 'testing2 ', data );
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    return defaultItemContextmenu;

  };

  config = {

    sortable: true,
    secondaryItemMenu: true,
    detailsCollapsible: true,

    // Event handlers

    itemSort: function ( jQEvent, ui ) {
      console.log( 'Sort happened', jQEvent, ui );
    },

    itemClick: function ( event, item ) {
      console.log( 'Clicked: ' + item );
    },

    itemContextmenuRenderer: function ( e, item ) {
      console.log( 'Contextmenu was triggered for node:', item );

      return getItemContextmenu( item );
    },

    detailsRenderer: function(item) {
      item.details = 'My details are here now!';
    },

    newItemForm: {
      title: 'Create new item',
      itemTemplateUrl: '/library/itemList/docs/newItemTemplate.html',
      expanded: false,
      controller: function ( $scope ) {
        $scope.createItem = function ( newItem ) {

          newItem.url = 'something';
          newItem.toolTip = newItem.title;

          items.push( newItem );

          $scope.newItem = {};

          config.newItemForm.expanded = false; // this is how you close the form itself

        };
      }
    },

    filter: {}

  };

  $scope.listData = {
    items: items
  };

  $scope.config = config;

} );