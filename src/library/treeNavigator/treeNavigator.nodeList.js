/*globals angular*/
/*jshint -W018 */

'use strict';

require('./treeNavigator.node.js');
require('../helpers/angular-recursion.js');

angular.module(
    'isis.ui.treeNavigator.nodeList', [
        'isis.ui.treeNavigator.node',
        'isis.ui.RecursionHelper'
    ]
)
    .directive(
        'treeNavigatorNodeList', function (ISISRecursionHelper) {

            function NodeListController($log) {

                var self,
                    updateSelection;


                self = this;

                updateSelection = function ($event, node) {
                    var index;

                    if (node) {

                        if ($event) {
                            if ($event.shiftKey) {
                                // TODO: properly update selected nodes
                                // start node is active node
                                // end node is theNode
                                // select all opened tree elements between the two nodes
                                self.treeCtrl.config.state.selectedNodes = [node.id];
                                $log.warn('Range selection is not implemented properly yet.');


                            } else if ($event.ctrlKey || $event.metaKey) {
                                index = self.treeCtrl.config.state.selectedNodes.indexOf(node.id);

                                if (index > -1) {
                                    // already selected, remove this node
                                    self.treeCtrl.config.state.selectedNodes.splice(index, 1);
                                } else {
                                    // select it
                                    self.treeCtrl.config.state.selectedNodes.push(node.id);
                                }

                            } else {
                                self.treeCtrl.config.state.selectedNodes = [node.id];

                            }

                        } else {
                            // event is not given
                            self.treeCtrl.config.state.selectedNodes = [node.id];
                        }

                        // active node is the clicked node
                        self.treeCtrl.config.state.activeNode = node.id;

                    } else {
                        self.treeCtrl.config.state.selectedNodes = [];
                        self.treeCtrl.config.state.activeNode = null;
                    }
                };


                self.isPageable = function () {

                    var result;


                    result = !! (Array.isArray(self.parentNode.children) &&
                        (self.parentNode.childrenCount > self.parentNode.children.length) &&
                        (self.treeCtrl.config.pagination && !isNaN(self.treeCtrl.config.pagination
                            .itemsPerPage)));


                    console.log('Pageable ' + self.parentNode.label, result);

                    return result;
                };


                self.showPageUp = function () {
                    console.log('First loaded child ' + self.parentNode.label, self.parentNode.firstLoadedChildPosition);
                    console.log('showPageUp', !(self.parentNode.firstLoadedChildPosition > 0));
                    return ( !! self.parentNode.firstLoadedChildPosition > 0);
                };


                self.showPageDown = function () {

                    var result = !! (self.parentNode.childrenCount > self.parentNode.lastLoadedChildPosition +
                        1);

                    console.log('Last loaded child ' + self.parentNode.label, self.parentNode.lastLoadedChildPosition);
                    console.log('showPageDown', result);

                    return result;
                };

                self.pageUp = function ($event) {
                    self.treeCtrl.loadSomeChildrenForNode($event, self.parentNode, true);
                };

                self.pageDown = function ($event) {
                    self.treeCtrl.loadSomeChildrenForNode($event, self.parentNode);
                };

                self.getLoadMoreText = function () {
                    return (this.config && this.config.loadMoreText) || '';
                };

            }

            function link(scope, element, attr, controllers) {

                controllers[1].treeCtrl = controllers[0];

            }

            return {
                scope: {
                    nodes: '=',
                    parentNode: '='
                },
                controller: NodeListController,
                controllerAs: 'ctrl',
                bindToController: true,
                require: ['^treeNavigator', '^treeNavigatorNodeList'],
                restrict: 'E',
                replace: true,
                templateUrl: '/isis-ui-components/templates/treeNavigator.nodeList.html',
                compile: function (element) {
                    return ISISRecursionHelper.compile(element, link);
                }

            };
        }
);