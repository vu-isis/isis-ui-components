/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.itemList.demo', [ 'isis.ui.itemList' ] );

demoApp.controller( 'ItemListDemoController', function ( $scope ) {


  var
  i,

  items = [],
  itemGenerator,

  config;

  itemGenerator = function ( id ) {
    return {
      id: id,
      title: 'List item ' + id,
      toolTip: 'Open item',
      onClick: null,
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
      ]

    };
  };

  for ( i = 0; i < 20; i++ ) {
    items.push( itemGenerator( i ) );
  }


  config = {

    sortable: true,

    itemSort: function ( e, ui ) {
      console.log( 'Sort happened', e, ui );
    },

    itemClick: function ( item ) {
      console.log( 'Clicked: ' + item.id );
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