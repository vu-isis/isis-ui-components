/*globals angular*/

'use strict';

require('./treeNavigator.nodeList.js');
require('./treeNavigator.header.js');
require('./treeNavigator.node.label.js');

angular.module(
    'isis.ui.treeNavigator', [
        'isis.ui.treeNavigator.nodeList',
        'isis.ui.treeNavigator.header',
        'isis.ui.treeNavigator.node.label'
    ])

    .directive(
    'treeNavigator', function () {

        function TreeNavigatorController($log) {

            var self,
                defaultTreeState;

            self = this;

            self.updateSelection = function ($event, node) {
                var index;

                if (node) {

                    if ($event) {
                        if ($event.shiftKey) {
                            // TODO: properly update selected nodes
                            // start node is active node
                            // end node is theNode
                            // select all opened tree elements between the two nodes
                            self.config.state.selectedNodes = [node.id];
                            $log.warn('Range selection is not implemented properly yet.');


                        } else if ($event.ctrlKey || $event.metaKey) {
                            index = self.config.state.selectedNodes.indexOf(node.id);

                            if (index > -1) {
                                // already selected, remove this node
                                self.config.state.selectedNodes.splice(index, 1);
                            } else {
                                // select it
                                self.config.state.selectedNodes.push(node.id);
                            }

                        } else {
                            self.config.state.selectedNodes = [node.id];

                        }

                    } else {
                        // event is not given
                        self.config.state.selectedNodes = [node.id];
                    }

                    // active node is the clicked node
                    self.config.state.activeNode = node.id;

                } else {
                    self.config.state.selectedNodes = [];
                    self.config.state.activeNode = null;
                }
            };


            self.scopeMenuConfig = {
                triggerEvent: 'click',
                position: 'left bottom'
            };

            self.preferencesMenuConfig = {
                triggerEvent: 'click',
                position: 'right bottom'
            };


            defaultTreeState = {

                activeNode: null,
                selectedNodes: [],
                expandedNodes: [],
                loadingNodes: [],

                activeScope: null

            };

            self.config = self.config || {};

            self.config.state = angular.extend(defaultTreeState, self.config.state || {});


            self.config.collapsedIconClass = self.config.collapsedIconClass || 'icon-arrow-right';
            self.config.expandedIconClass = self.config.expandedIconClass || 'icon-arrow-down';

            self.config.extraInfoTemplateUrl = self.config.extraInfoTemplateUrl ||
                '/isis-ui-components/templates/treeNavigator.node.extraInfo.html';

        }


        return {
            scope: {
                treeData: '=',
                config: '='
            },

            restrict: 'E',
            replace: true,
            templateUrl: '/isis-ui-components/templates/treeNavigator.html',
            controller: TreeNavigatorController,
            controllerAs: 'ctrl',
            bindToController: true

        };
    }
)
    // Based on: http://stackoverflow.com/questions/20444409/handling-ng-click-and-ng-dblclick-on-the-same-element-with-angularjs

    .directive('isisSglclick', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var fn = $parse(attr.isisSglclick);
                var delay = 300, clicks = 0, timer = null;
                element.on('click', function (event) {
                    clicks++;  //count clicks
                    if (clicks === 1) {
                        timer = setTimeout(function () {
                            scope.$apply(function () {
                                fn(scope, {$event: event});
                            });
                            clicks = 0;             //after action performed, reset counter
                        }, delay);
                    } else {
                        clearTimeout(timer);    //prevent single-click action
                        clicks = 0;             //after action performed, reset counter
                    }
                });
            }
        };
    }])
    .directive('isisStopEvent', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.bind('click', function (e) {
                    e.stopPropagation();
                });
            }
        };
    });