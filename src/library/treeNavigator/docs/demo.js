/*globals angular*/
'use strict';

var demoApp = angular.module( 'isis.ui.treeNavigator.demo', [ 'ui.bootstrap' ] );

demoApp.controller( 'TreeNavigatorDemoController', function ( $scope, $log ) {

  var config,
    treeNodes = {},

    addNode,
    removeNode,
    update,
    dummyTreeDataGenerator,
    updateSelection,
    sortChildren;

  updateSelection = function ( $event, theNode ) {
    var index;

    if ( theNode ) {

      if ( $event ) {
        if ( $event.shiftKey ) {
          // TODO: properly update selected nodes
          // start node is active node
          // end node is theNode
          // select all opened tree elements between the two nodes
          $scope.state.selectedNodes = [ theNode.id ];
          $log.warn( 'Range selection is not implemented properly yet.' );

        } else if ( $event.ctrlKey || $event.metaKey ) {
          index = $scope.state.selectedNodes.indexOf( theNode.id );

          if ( index > -1 ) {
            // already selected, remove this node
            $scope.state.selectedNodes.splice( index, 1 );
          } else {
            // select it
            $scope.state.selectedNodes.push( theNode.id );
          }

        } else {
          $scope.state.selectedNodes = [ theNode.id ];

        }

      } else {
        // event is not given
        $scope.state.selectedNodes = [ theNode.id ];
      }

      // active node is the clicked node
      $scope.state.activeNode = theNode.id;

    } else {
      $scope.state.selectedNodes = [];
      $scope.state.activeNode = null;
    }
  };

  dummyTreeDataGenerator = function ( treeNode, name, maxCount, levels ) {
    var i,
      id,
      count,
      childNode;

    levels = levels || 0;

    count = Math.round(
      Math.random() * maxCount
    ) + 1;

    for ( i = 0; i < count; i += 1 ) {
      id = name + i;

      childNode = addNode( treeNode, id );

      if ( levels > 0 ) {
        dummyTreeDataGenerator( childNode, id + '.', maxCount, levels - 1 );
      }
    }
  };

  update = function () {
    if ( !$scope.$$phase ) {
      $scope.$apply();
    }
  };

  addNode = function ( parentTreeNode, id ) {
    var newTreeNode,
      children = [],

      nodeClick,
      nodeDblclick,
      expanderClick;

    $log.log( 'Adding a new node ' + id + ( parentTreeNode ? ' to ' + parentTreeNode.id :
      ' as ROOT' ) );

    nodeDblclick = function ( $event, theNode ) {

      nodeClick( $event, theNode );
      expanderClick( $event, theNode );

      // one active node
      $scope.state.activeNode = theNode.id;

      // one selected node
      $scope.state.selectedNodes = [ theNode.id ];
    };


    expanderClick = function ( $event, theNode ) {
      $log.log( 'ExpanderClickHandler: ' + theNode.id + ' ' + theNode.label + ' expended ' + theNode
        .expanded );

      if ( theNode.children.length === 0 && !theNode.isLoading && !theNode.loaded ) {
        theNode.isLoading = true;
        update();

        // emulate async loading of objects
        setTimeout(
          function () {
            dummyTreeDataGenerator( theNode, 'Async ' + id, 5, 0 );

            theNode.isLoading = false;
            theNode.loaded = true;
            theNode.expanded = true;

            update();
          },
          2000
        );

      } else {
        // Expand-collapse
        theNode.expanded = !theNode.expanded;
      }

      updateSelection( null, theNode );
    };

    nodeClick = function ( $event, theNode ) {
      $log.log( 'NodeClickHandler: ' + theNode.id + ' ' + theNode.label + ' was clicked' );

      updateSelection( $event, theNode );
    };

    // node structure
    newTreeNode = {
      label: id,
      extraInfo: 'Extra info',
      children: children,
      childrenCount: 0,
      expanded: false,
      isLoading: false,
      loaded: false,
      nodeData: {},
      nodeClick: nodeClick,
      nodeDblclick: nodeDblclick,
      expanderClick: expanderClick,
      iconClass: 'fa fa-file-o',
      contextMenu: [], // defined below
      onContextMenu: $scope.onContextMenu
    };

    newTreeNode.id = id;

    // add the new node to the map
    treeNodes[ newTreeNode.id ] = newTreeNode;


    // define context menu
    newTreeNode.contextMenu = [
      {
        items: [
          {
            id: 'create',
            label: 'Create new',
            disabled: true,
            iconClass: 'fa fa-plus',
            menu: []
          },
          {
            id: 'dummy',
            label: 'Just for test ' + newTreeNode.id,
            action: function ( data ) {
              $log.log( 'testing ', data );
            }

          },
          {
            id: 'rename',
            label: 'Rename'
          },
          {
            id: 'delete',
            label: 'Delete',
            iconClass: 'fa fa-minus',
            actionData: {
              id: newTreeNode.id
            },
            action: function ( data ) {
              removeNode( data.id );
            }
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
                      $log.log( 'testing2 ', data );
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ];


    // TODO: add context menu
    // TODO: add delete - on delete and in context menu
    // TODO: add create new object (using meta model rules) - disabled and enabled types?
    // TODO: add copy to clipboard
    // TODO: add open in Visualizer
    // TODO: add rename
    // TODO: add library business (export as library, update library from file, import library here)
    // TODO: collapse expand
    // TODO: handle double click
    // TODO: show meta types - config
    // TODO: show icon

    if ( parentTreeNode ) {
      // if a parent was given add the new node as a child node
      parentTreeNode.iconClass = undefined;
      parentTreeNode.children.push( newTreeNode );


      parentTreeNode.childrenCount = parentTreeNode.children.length;

      if ( newTreeNode.childrenCount === 0 ) {
        newTreeNode.childrenCount = Math.round( Math.random() );
      }


      if ( newTreeNode.childrenCount ) {
        newTreeNode.iconClass = undefined;
      }

      sortChildren( parentTreeNode.children );

      newTreeNode.parentId = parentTreeNode.id;
    } else {

      // if no parent is given replace the current root node with this node
      $scope.treeData = newTreeNode;
      $scope.treeData.unCollapsible = true;
      newTreeNode.parentId = null;
    }

    return newTreeNode;
  };

  removeNode = function ( id ) {
    var
      parentNode,
      nodeToDelete = treeNodes[ id ];

    $log.debug( 'Removing a node ' + id );

    if ( nodeToDelete ) {
      if ( nodeToDelete.parentId !== null && treeNodes[ nodeToDelete.parentId ] !== undefined ) {
        // find parent node
        parentNode = treeNodes[ nodeToDelete.parentId ];

        // remove nodeToDelete from parent node's children
        parentNode.children = parentNode.children.filter( function ( el ) {
          return el.id !== id;
        } );

        parentNode.childrenCount = parentNode.children.length;

        if ( parentNode.childrenCount === 0 ) {
          parentNode.iconClass = 'fa fa-file-o';
        }
      }

      delete treeNodes[ id ];
    }

  };

  sortChildren = function ( values ) {
    var orderBy = ['label', 'id'];

    values.sort( function ( a, b ) {
      var i,
        key,
        result;

      for ( i = 0; i < orderBy.length; i += 1 ) {
        key = orderBy[i];
        if ( a.hasOwnProperty( key ) && b.hasOwnProperty( key ) ) {
          result = a[key].toLowerCase().localeCompare( b[key].toLowerCase() );
          if ( result !== 0 ) {
            return result;
          }
        }
      }

      // a must be equal to b
      return 0;
    } );

    return values;
  };

  config = {
    scopeMenu: [
      {
        items: [
          {
            id: 'project',
            label: 'Project Hierarchy',
            action: function () {
              $scope.state.activeScope = 'project';
              $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 0 ];
            }
          },
          {
            id: 'composition',
            label: 'Composition',
            action: function () {
              $scope.state.activeScope = 'composition';
              $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 1 ];
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
                      $log.log( data );
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
  $scope.config.selectedScope = $scope.config.scopeMenu[ 0 ].items[ 0 ];
  $scope.treeData = {};
  $scope.state = {
    // id of activeNode
    activeNode: null,

    // ids of selected nodes
    selectedNodes: [],

    // id of active scope
    activeScope: 'project'
  };


  addNode( null, 'ROOT' );
  dummyTreeDataGenerator( $scope.treeData, 'Node item ', 5, 3 );

} );