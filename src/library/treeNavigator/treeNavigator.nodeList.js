/*globals angular*/

'use strict';

require('./treeNavigator.node.js');
require('../helpers/angular-recursion.js');

angular.module(
    'isis.ui.treeNavigator.nodeList', [
        'isis.ui.treeNavigator.node',
        'isis.ui.RecursionHelper'
    ]
)

    .controller('TreeNavigatorNodeListController', function ($scope, $log) {

        var initializeScope,
            updateSelection,
            removeNodeFromList,
            markNodeExpanded,
            loadSomeChildren;

        // Tree helpers

        //  nodeParents = {},
        //  walkTree,
        //  getPathFromRoot,
        //  findFirstCommonParent;


        removeNodeFromList = function (list, node) {
            var index;

            if (angular.isArray(list) && angular.isObject(node)) {

                index = list.indexOf(node.id);

                if (index > -1) {
                    list.splice(index, 1);
                }

            }
        };

        loadSomeChildren = function($event, node, isBackpaging) {

            var count;

            if (angular.isFunction($scope.config.loadChildren)) {

                if ($scope.config.pagination && $scope.config.pagination.itemsPerPage) {
                    count = $scope.config.pagination.itemsPerPage;
                }

                $scope.config.state.loadingNodes.push(node.id);
                $scope.config.loadChildren($event, node, count)
                    .then(function (children) {

                        if (Array.isArray(children)) {

                            node.children = children;

                            if ($scope.pageable()) {

                                if (!node.firstLoadedChild) {
                                    node.firstLoadedChild = -1;
                                }

                                if (!node.lastLoadedChild) {
                                    node.lastLoadedChild = -1;
                                }

                                debugger;

                                if (isBackpaging === true) {

                                    node.lastLoadedChild = node.firstLoadedChild - 1;
                                    node.firstLoadedChild -= node.children.length;


                                } else {

                                    node.firstLoadedChild += node.lastLoadedChild + 1;
                                    node.lastLoadedChild += node.children.length;

                                }


                            }

                        }

                        removeNodeFromList($scope.config.state.loadingNodes, node);
                        markNodeExpanded($event, node);
                    });
            }

        };

        initializeScope = function () {

            var defaultTreeState = {

                activeNode: null,
                selectedNodes: [],
                expandedNodes: [],
                loadingNodes: [],

                activeScope: null

            };

            $scope.config = $scope.config || {};

            $scope.config.state = angular.extend(defaultTreeState, $scope.config.state || {});

        };
        //
        //  getPathFromRoot = function(root, node) {
        //    var path = [];
        //
        //    return path;
        //  };
        //
        //  findFirstCommonParent = function(nodeA, nodeB) {
        //
        //    var parent = null;
        //
        //    return parent;
        //
        //  };

        updateSelection = function ($event, node) {
            var index;

            if (node) {

                if ($event) {
                    if ($event.shiftKey) {
                        // TODO: properly update selected nodes
                        // start node is active node
                        // end node is theNode
                        // select all opened tree elements between the two nodes
                        $scope.config.state.selectedNodes = [node.id];
                        $log.warn('Range selection is not implemented properly yet.');


                    } else if ($event.ctrlKey || $event.metaKey) {
                        index = $scope.config.state.selectedNodes.indexOf(node.id);

                        if (index > -1) {
                            // already selected, remove this node
                            $scope.config.state.selectedNodes.splice(index, 1);
                        } else {
                            // select it
                            $scope.config.state.selectedNodes.push(node.id);
                        }

                    } else {
                        $scope.config.state.selectedNodes = [node.id];

                    }

                } else {
                    // event is not given
                    $scope.config.state.selectedNodes = [node.id];
                }

                // active node is the clicked node
                $scope.config.state.activeNode = node.id;

            } else {
                $scope.config.state.selectedNodes = [];
                $scope.config.state.activeNode = null;
            }
        };

        initializeScope();


        // Node state helper/watcher functions

        $scope.isNodeExpanded = function (node) {
            return ( $scope.config.state.expandedNodes.indexOf(node.id) > -1 );
        };

        $scope.isNodeSelected = function (node) {
            return ( $scope.config.state.selectedNodes.indexOf(node.id) > -1 );
        };

        $scope.isNodeLoading = function (node) {
            return ( $scope.config.state.loadingNodes.indexOf(node.id) > -1 );
        };

        $scope.canNodeExpand = function (node) {
            return node.childrenCount > 0;
        };

        $scope.canNodeCollapse = function (node) {
            return node.unCollapsible !== true;
        };

        $scope.pageable = function () {

            var result = $scope.currentNode &&
                $scope.currentNode.childrenCount &&
                Array.isArray($scope.currentNode.children) &&
                ( $scope.currentNode.childrenCount > $scope.currentNode.children.length ) &&
                ( $scope.config.pagination && !isNaN($scope.config.pagination.itemsPerPage) );

            return result;
        };

        $scope.showPageUp = function () {
            console.log('First loaded child', $scope.currentNode.firstLoadedChild );
            return ($scope.currentNode.firstLoadedChild > 0);
        };

        $scope.showPageDown = function () {
            console.log($scope.currentNode.childrenCount, $scope.currentNode.lastLoadedChild );
            return ($scope.currentNode.childrenCount > $scope.currentNode.lastLoadedChild + 1);
        };

        $scope.pageDown = function($event, node) {
            loadSomeChildren($event, node);
        };

        $scope.pageDown = function($event, node) {
            loadSomeChildren($event, node, true);
        };

        $scope.getNodeClass = function (node) {
            var cssClassStr = '';

            if ($scope.isNodeExpanded(node)) {
                cssClassStr += 'expanded';
            }

            if ($scope.config.state.activeNode === node.id) {
                cssClassStr += ' active-node';
            }

            if ($scope.isNodeSelected(node)) {
                cssClassStr += ' selected-node';
            }

            if (angular.isFunction($scope.config.nodeClassGetter)) {
                cssClassStr += ' ' + $scope.config.nodeClassGetter(node);
            }

            return cssClassStr;
        };

        // Node event handlers

        $scope.nodeClick = function ($event, node) {

            if (angular.isFunction($scope.config.nodeClick)) {
                $scope.config.nodeClick($event, node);
            }

            if (!$scope.config.disableManualSelection) {
                updateSelection($event, node);
            }

        };

        $scope.nodeContextmenu = function ($event, node) {

            if (angular.isFunction($scope.config.nodeContextmenuRenderer)) {
                $scope.nodeContextMenuData = $scope.config.nodeContextmenuRenderer($event, node);
            }

        };

        $scope.nodeDblclick = function ($event, node) {

            if (angular.isFunction($scope.config.nodeDblclick)) {
                $scope.config.nodeDblclick($event, node);
            }

            $scope.nodeExpanderClick($event, node);

        };

        markNodeExpanded = function ($event, node) {
            $scope.config.state.expandedNodes.push(node.id);

            if (angular.isFunction($scope.config.nodeExpanderClick)) {
                $scope.config.nodeExpanderClick($event, node, true);
            }
        };

        $scope.nodeExpanderClick = function ($event, node) {

            if (!$scope.isNodeLoading(node)) {
                if ($scope.isNodeExpanded(node)) {
                    if ($scope.canNodeCollapse(node)) {

                        removeNodeFromList($scope.config.state.expandedNodes, node);

                        if (angular.isFunction($scope.config.nodeExpanderClick)) {
                            $scope.config.nodeExpanderClick($event, node, false);
                        }
                    }
                } else {
                    if ($scope.canNodeExpand(node)) {
                        if (node.children.length === 0) {

                            // Need to load children

                            loadSomeChildren($event, node);

                        } else {
                            // No need to load just mark it expanded
                            markNodeExpanded($event, node);

                        }
                    }
                }
            }
        };

        $scope.nodeDrop = function ($event, node, $data) {
            console.log($data, 'Dropped on ', node);
        };

        //  $rootScope.$on('ANGULAR_DRAG_START', function($event){
        //    console.log($event);
        //  });

    })

    .directive(
    'treeNavigatorNodeList', function (ISISRecursionHelper) {
        return {
            scope: {
                nodes: '=',
                config: '=',
                currentNode: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: '/isis-ui-components/templates/treeNavigator.nodeList.html',
            controller: 'TreeNavigatorNodeListController',
            compile: function (element) {
                return ISISRecursionHelper.compile(element);
            }

        };
    }
);