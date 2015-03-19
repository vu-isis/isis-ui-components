/*globals angular*/

'use strict';

require('../contextmenu/contextmenu.js');

angular.module(
    'isis.ui.treeNavigator.node.label', [
        'isis.ui.contextmenu'
    ]
)
    .directive(
    'treeNavigatorNodeLabel', function () {

        function NodeLabelController() {

            var self;

            self = this;

            function removeNodeFromList(list, node) {
                var index;

                if (angular.isArray(list) && angular.isObject(node)) {

                    index = list.indexOf(node.id);

                    if (index > -1) {
                        list.splice(index, 1);
                    }

                }
            }

            self.loading = false;

            self.loadSomeChildren = function ($event, isBackpaging) {

                var count;

                if (angular.isFunction(self.treeCtrl.config.loadChildren)) {

                    if (self.treeCtrl.config.pagination && self.treeCtrl.config.pagination.itemsPerPage) {
                        count = self.treeCtrl.config.pagination.itemsPerPage;
                    }

                    self.loading = true;

                    self.treeCtrl.config.loadChildren($event, self.node, count)
                        .then(function (children) {

                            if (Array.isArray(children)) {

                                self.node.children = children;


                                if (!self.node.firstLoadedChild) {
                                    self.node.firstLoadedChild = -1;
                                }

                                if (!self.node.lastLoadedChild) {
                                    self.node.lastLoadedChild = -1;
                                }

                                if (isBackpaging === true) {

                                    self.node.lastLoadedChild = self.node.firstLoadedChild - 1;
                                    self.node.firstLoadedChild -= self.node.children.length;


                                } else {

                                    self.node.firstLoadedChild += self.node.lastLoadedChild + 1;
                                    self.node.lastLoadedChild += self.node.children.length;

                                }

                            }

                            self.loading = false;

                            self.markExpanded($event);
                        });
                }

            }
            ;

            self.isExpanded = function () {
                return ( self.treeCtrl.config.state.expandedNodes.indexOf(self.node.id) > -1 );
            };

            self.isSelected = function () {
                return ( self.treeCtrl.config.state.selectedNodes.indexOf(self.node.id) > -1 );
            };


            // Node event handlers

            self.nodeClick = function ($event) {

                if (angular.isFunction(self.treeCtrl.config.nodeClick)) {
                    self.treeCtrl.config.nodeClick($event, self.node);
                }

                if (!self.treeCtrl.config.disableManualSelection) {
                    self.treeCtrl.updateSelection($event, self.node);
                }

            };

            self.nodeContextmenu = function ($event) {

                if (angular.isFunction(self.treeCtrl.config.nodeContextmenuRenderer)) {
                    self.nodeContextMenuData = self.treeCtrl.config.nodeContextmenuRenderer($event, self.node);
                }

            };

            self.nodeDblclick = function ($event) {

                if (angular.isFunction(self.treeCtrl.config.nodeDblclick)) {
                    self.treeCtrl.config.nodeDblclick($event, self.node);
                }

                self.nodeExpanderClick($event);

            };

            self.markExpanded = function ($event) {
                self.treeCtrl.config.state.expandedNodes.push(self.node.id);

                if (angular.isFunction(self.treeCtrl.config.nodeExpanderClick)) {
                    self.treeCtrl.config.nodeExpanderClick($event, self.node, true);
                }
            };

            self.nodeExpanderClick = function ($event) {

                if (!self.loading) {
                    if (self.isExpanded()) {
                        if (self.canCollapse()) {

                            removeNodeFromList(self.treeCtrl.config.state.expandedNodes, self.node);

                            if (angular.isFunction(self.treeCtrl.config.nodeExpanderClick)) {
                                self.treeCtrl.config.nodeExpanderClick($event, self.node, false);
                            }
                        }
                    } else {
                        if (self.canExpand()) {
                            if (self.node.children.length === 0) {

                                // Need to load children

                                self.loadSomeChildren($event);

                            } else {
                                // No need to load just mark it expanded
                                self.markExpanded($event);

                            }
                        }
                    }
                }
            };

            self.canExpand = function () {
                return self.node.childrenCount > 0;
            };

            self.canCollapse = function () {
                return self.node.unCollapsible !== true;
            };

            self.nodeDrop = function ($event, $data) {
                console.log($data, 'Dropped on ', self.node);
            };

            self.getCollapsedIconClass = function() {
                return (self.node.collapsedIconClass || self.treeCtrl.config.collapsedIconClass);
            };

            self.getExpandedIconClass = function() {
                return (self.node.expandedIconClass || self.treeCtrl.config.expandedIconClass);
            };

        }

        return {
            scope: {
                node: '='
            },
            controller: NodeLabelController,
            controllerAs: 'ctrl',
            bindToController: true,
            require: [ '^treeNavigator', 'treeNavigatorNodeLabel' ],
            restrict: 'E',
            replace: true,
            templateUrl: '/isis-ui-components/templates/treeNavigator.node.label.html',
            link: function(scope, element, attribures, controllers) {

                var treeCtrl,
                    labelCtrl;

                treeCtrl = controllers[0];
                labelCtrl = controllers[1];

                labelCtrl.treeCtrl = treeCtrl;
            }
        };
    }
);