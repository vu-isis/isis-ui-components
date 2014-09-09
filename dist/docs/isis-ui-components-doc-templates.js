angular.module("isis.ui.demoApp.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/docs/ui_components_docs.html","<!DOCTYPE html>\n<html ng-app=\"isis.ui.demoApp\">\n<head>\n    <title>ISIS UI Components Documentation</title>\n\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"https://code.jquery.com/ui/1.11.1/themes/black-tie/jquery-ui.css\">\n    <link type=\"text/css\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"isis-ui-components-docs.css\">\n\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"../isis-ui-components.css\">\n\n</head>\n<body>\n<div ng-controller=\"UIComponentsDemoController\" class=\"container\">\n\n    <h1>isis.ui.components</h1>\n\n    <section ng-repeat=\"component in components\" id=\"{{ component.name }}\">\n        <div class=\"page-header\"><h1>{{ component.name }} <small>(isis.ui.{{ component.name }})</small></h1></div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6 show-grid\" ng-include=\"component.template\">\n\n            </div>\n            <div btf-markdown class=\"col-md-6\" ng-include=\"component.docs\">\n\n            </div>\n        </div>\n    </section>\n\n</div>\n<script src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script>\n<script src=\"https://code.jquery.com/ui/1.11.1/jquery-ui.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js\"></script>\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\n<script src=\"http://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.js\"></script>\n\n<script src=\"../isis-ui-components.js\"></script>\n<script src=\"../isis-ui-components-templates.js\"></script>\n\n<script src=\"isis-ui-components-docs.js\"></script>\n<script src=\"isis-ui-components-doc-templates.js\"></script>\n\n</body>\n</html>");
$templateCache.put("/library/contextmenu/docs/demo.html","<script type=\"text/ng-template\" id=\"contextmenu-custom-content.html\">\n    <div class=\"custom-content\" style=\"border:1px solid rgba(0,0,0,.15); padding: 1ex; background-color: #fff;\" ng-controller=\"ContextmenuCustomTemplateController\">\n        <div>\n            <button class=\"btn btn-default btn-sm pull-right\" ng-click=\"closeClick()\">Close this <i class=\"glyphicon glyphicon-remove-sign\"></i></button>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div>\n            <p>That you now the result of this equation?</p>\n            <label>2 + 2 = </label><input ng-model=\"parameter.value\" min=\"0\" max=\"99\" required ng-change=\"isValid(parameter.value)\"/>\n            <span ng-if=\"parameter.invalid\" class=\"label label-danger\">This can not be true!</span>\n        </div>\n    </div>\n</script>\n\n<div data-ng-controller=\"ContextmenuDemoController\">\n    <p>Test context-menus here:</p>\n    <button class=\"btn btn-default\"\n            contextmenu=\"preContextMenu($event)\"\n            isis-contextmenu\n            contextmenu-data=\"menuData\">\n        Contextmenu default (right-click)</button>\n    <p></p>\n    <button class=\"btn btn-default\"\n            contextmenu=\"preContextMenu($event)\"\n            isis-contextmenu\n            contextmenu-data=\"menuData\"\n            contextmenu-config=\"menuConfig1\">\n        Contextmenu on click, positioned to left-right</button>\n    <p></p>\n    <button class=\"btn btn-default\"\n            contextmenu=\"preContextMenu($event)\"\n            isis-contextmenu\n            contextmenu-config=\"menuConfig2\">\n            Custom content, appears on mouseover, positioned to left-right</button>\n</div>");
$templateCache.put("/library/dropdownNavigator/docs/demo.html","<div style=\"height: 220px;\" data-ng-controller=\"DropdownDemoController\">\n    <div style=\"background-color: #222;\">\n        <dropdown-navigator data-navigator=\"navigator\"></dropdown-navigator>\n    </div>\n</div>");
$templateCache.put("/library/hierarchicalMenu/docs/demo.html","<div style=\"height: 200px;\">\n    <div data-ng-controller=\"HierarchicalMenuDemoController\">\n        <hierarchical-menu menu=\"menu\"></hierarchical-menu>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>");
$templateCache.put("/library/itemList/docs/demo.html","<script type=\"text/ng-template\" id=\"list-item-details.html\">\n    <div ng-controller=\"ListItemDetailsDemoController\"\n         class=\"custom-content\" style=\"border:1px solid rgba(0,0,0,.15); padding: 1ex; background-color: #fff;\">\n        <div class=\"clearfix\"></div>\n        <div>\n            <p>That you now the result of this equation?</p>\n            <label>2 + 2 = </label><input ng-model=\"parameter.value\" min=\"0\" max=\"99\" required\n                                          ng-change=\"isValid(parameter.value)\"/>\n            <span ng-if=\"parameter.invalid\" class=\"label label-danger\">This can not be true!</span>\n        </div>\n    </div>\n    More stuff can come here. As you wish. As you like it.\n</script>\n\n<script type=\"text/ng-template\" id=\"list-item-details2.html\">\n    <div ng-controller=\"ListItemDetailsDemoController2\">\n        <demo-sub-list\n            list-data=\"listData2\" config=\"config2\"></demo-sub-list>\n    </div>\n</script>\n\n<div data-ng-controller=\"ItemListDemoController\" style=\"height: 700px; overflow-x:auto; padding: 0 1ex;\">\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-md-12\"></item-list>\n</div>");
$templateCache.put("/library/itemList/docs/newItemTemplate.html","<form class=\"drop-box new-order-set\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <input type=\"text\" class=\"form-control\" data-ng-model=\"newItem.id\"\n                   placeholder=\"ID\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <input type=\"text\" class=\"form-control\" data-ng-model=\"newItem.title\"\n                   placeholder=\"New item name\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <textarea class=\"form-control edit-workspace-description\" rows=\"5\"\n                      data-ng-model=\"newItem.description\"\n                      placeholder=\"Description\"></textarea>\n        </div>\n    </div>\n    <div class=\"row form-footer\">\n        <div class=\"col-md-8\">\n            <button class=\"btn btn-default btn-submit btn-success\"\n                    data-ng-click=\"createItem(newItem)\">Create\n            </button>\n        </div>\n    </div>\n</form>\n");
$templateCache.put("/library/propertyGrid/docs/property_grid_demo.html","<!DOCTYPE html>\n<html>\n<head lang=\"en\">\n<meta charset=\"UTF-8\">\n<title></title>\n\n<script src=\"http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.14/require.min.js\"></script>\n\n<!--<script src=\"//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js\"></script>-->\n\n<script type=\"text/javascript\">\nvar DEBUG = true,\n        _jqueryVersion = \'2.1.0\',\n        _jqueryUIVersion = \'1.10.4\',\n        _bootsrapVersion = \'3.1.1\';\n\n\nrequire.config( {\n    baseUrl: \"../../../\",\n\n    map: {\n        \'*\': {\n            \'css\': \'lib/require/require-css/css\',\n            \'text\': \'lib/require/require-text/text\'\n        }\n    },\n\n    paths: {\n        \'jquery\': \'lib/jquery/jquery-\' + _jqueryVersion + ( DEBUG ? \'.min\' : \'\' ),\n        \'bootstrap\': \'lib/bootstrap/\' + _bootsrapVersion + \'/js/bootstrap\' + ( DEBUG ? \'.min\' : \'\' ),\n\n        \'angular\': \'lib/angular/angular-1.2.19/angular\' + ( DEBUG ? \'.min\' : \'\' ),\n        \'angular-ui-bootstrap\': \'lib/angular/ui-bootstrap/ui-bootstrap-tpls-0.11.0.min\'\n    },\n\n    shim: {\n        \'angular-ui-bootstrap\': [\'angular\', \'bootstrap\'],\n\n        \'bootstrap\': [\n            \'jquery\',\n            \'css!lib/bootstrap/\' + _bootsrapVersion + \'/css/bootstrap.min.css\',\n            \'css!lib/bootstrap/\' + _bootsrapVersion + \'/css/bootstrap-theme.min.css\'\n        ]\n    },\n\n    waitSeconds: 15\n} );\n\nrequirejs( [\n    \'angular-ui-bootstrap\',\n    \'isis-ui-components/propertyGrid/propertyGrid\'], function ( ngBootstrap, PropertyGrid ) {\n\n    var demoApp = angular.module( \'demoApp\', [\'ui.bootstrap\', \'isis.ui.propertyGrid\'] );\n\n    demoApp.controller( \'PropertyGridDemoController\', function ( $scope ) {\n        var onChange = function ( item ) {\n\n                    console.log( \'Item changed > \' + item.label, item );\n\n                },\n\n                attributes = [\n                    {\n                        id: \'Name\',\n                        label: \'Name\',\n                        values: [\n                            {\n                                value: \'This is my name\'\n                            }\n                        ],\n                        onChange: onChange\n                    },\n                    {\n\n                        id: \'compound\',\n                        label: \'Compound something\',\n                        cssClass: \'\',\n                        values: [\n                            {\n                                value: [\n                                    {\n                                        id: \'Position_x\',\n                                        label: \'X\',\n                                        values:[\n                                            {\n                                                value: 10\n                                            }\n                                        ]\n                                                //valueWidget: integerValueWidget,\n                                    },\n                                    {\n                                        id: \'Position_y\',\n                                        label: \'Y\',\n                                        values: [\n                                            {\n                                                value: 30\n                                            }\n                                        ]\n                                                //valueWidget: integerValueWidget,\n                                    },\n                                    {\n                                        id: \'Dabrack\',\n                                        label: \'Dabrack\',\n                                        values: [\n                                            {\n                                                value: \'This is my name\'\n                                            }\n                                        ],\n                                        onChange: onChange\n                                    }\n                                ],\n                                getDisplayValue: function ( value ) {\n                                    var coordinates = value.value;\n\n                                    return coordinates[0].values[0].value + \', \' + coordinates[1].values[0].value;\n                                },\n                                widget: {\n                                    type: \'compound\'\n                                }\n                            }\n                        ],\n                        onChange: onChange\n                    },\n                    {\n                        id: \'is_happy\',\n                        label: \'Happy or not?\',\n                        values: [\n                            { value: true }\n                        ]\n                    },\n                    {\n                        id: \'is_rich\',\n                        label: \'Rich or not?\',\n                        values: [\n                            { value: false }\n                        ]\n                    },\n                    {\n                        id: \'country\',\n                        label: \'Country\',\n                        values: [\n                            {\n                                value: \'U.S.A.\',\n                                widget: {\n                                    type: \'select\',\n                                    defaultValue: \'pol\',\n                                    config: {\n                                        multi: false,\n                                        options: [\n                                            {\n                                                label: \'U.S.A.\',\n                                                value: \'usa\'\n                                            },\n                                            {\n                                                label: \'Poland\',\n                                                value: \'pol\'\n                                            },\n                                            {\n                                                label: \'England\',\n                                                value: \'eng\'\n                                            }\n                                        ]\n                                    }\n                                }\n\n                            }\n                        ],\n                        onChange: onChange\n                    }\n                ],\n                visualizationProperties = [\n                    {\n                        id: \'color\',\n                        label: \'Color\',\n                        values: [\n                            {\n                                value: \'#ff0066\',\n                                widget: {\n                                    type: \'colorPicker\'\n                                }\n                            }\n                        ],\n                        onChange: onChange\n                    },\n\n                    {\n\n                        id: \'Position\',\n                        label: \'Position\',\n                        cssClass: \'\',\n                        values: [\n\n                            {\n                                id: \'Position_x\',\n                                label: \'X\',\n                                value: 10\n                                //valueWidget: integerValueWidget,\n                            },\n                            {\n                                id: \'Position_y\',\n                                label: \'Y\',\n                                value: 30\n                                //valueWidget: integerValueWidget,\n                            }\n                        ],\n                        onChange: onChange\n                    }\n\n                ],\n                config = {\n                    propertyLabelPostfix: \':\',\n                    mode: \'display\'\n                },\n                propertyGroup1 = {\n                    label: \'Attributes\',\n                    expanded: true,\n                    items: attributes\n                },\n                propertyGroup2 = {\n                    label: \'Visualization properties\',\n                    expanded: true,\n                    items: visualizationProperties\n                },\n                propertyGroups = [ propertyGroup1, propertyGroup2 ];\n\n        $scope.grid = {\n            propertyGroups: propertyGroups,\n            config: config,\n            id: \'propertyGrid1\'\n        };\n\n    } );\n\n    angular.bootstrap( document, [\'demoApp\'] );\n\n    console.log( \'Demo controller initialized\' );\n} );\n\n</script>\n\n<style>\n    .property-panel {\n        width: 300px;\n        font-size: 11px;\n    }\n\n</style>\n\n</head>\n<body>\n\n<div data-ng-controller=\"PropertyGridDemoController\" style=\"padding: 10px\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-1\">Mode:</div>\n            <div class=\"col-md-4\">\n                <div class=\"btn-group\">\n                    <label class=\"btn btn-default\" ng-model=\"grid.config.mode\" btn-radio=\"\'display\'\">Display</label>\n                    <label class=\"btn btn-default\" ng-model=\"grid.config.mode\" btn-radio=\"\'edit\'\">Edit</label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <p></p>\n\n    <div class=\"property-panel\">\n        <property-grid grid-data=\"grid\" unresponsive=\"true\"></property-grid>\n    </div>\n\n    <div class=\"container-fluid\">\n        <property-grid grid-data=\"grid\"></property-grid>\n    </div>\n`\n</div>\n\n</body>\n</html>");
$templateCache.put("/library/simpleDialog/docs/demo.html","<script type=\"text/ng-template\" id=\"confirm-content-template\">\n    <p>That you now the result of this equation?</p>\n    <label>2 + 2 = </label><input ng-model=\"parameter.value\" min=\"0\" max=\"99\" required ng-change=\"isValid()\"/>\n    <span ng-if=\"parameter.invalid\" class=\"label label-danger\">This can not be true!</span>\n</script>\n\n<div data-ng-controller=\"ConfirmDialogDemoController\">\n    Test a dialog here: <button class=\"btn btn-default\" ng-click=\"openDialog()\">Open dialog</button>\n</div>");
$templateCache.put("/library/treeNavigator/docs/demo.html","<div data-ng-controller=\"TreeNavigatorDemoController\" style=\"height: 600px; overflow-x:auto;\">\n    <tree-navigator tree-data=\"treeData\" config=\"config\"></tree-navigator>\n</div>");
$templateCache.put("/library/contextmenu/docs/readme.md","`isisContextmenu` is a directive for displaying contextual-menu-like call-outs. Attach it as an attribute on triggering object.\n\nUse the following attributes along:\n\n * `contextmenuConfig` - {object} configuration options:\n    - `triggerEvent` - {string} the DOM event triggering appearance\n    - `contentTemplateUrl` - {string} url of template for content. Uses a `hierarchical-menu` as default.\n    - `position` - {string} mouse coordinates by default but with this option you can override menu position to `\'left bottom\'` or `\'right bottom\'` of triggering element\n * `contextmenuData` - {object} data passed to shell directive in template. By default, specify a menu structure for `hierarchical-menu`.\n * `contextmenu-disabled` - {function} if set, will be evaluated before showing menu\n * `contextmenu` - {function} callback function called before menu is instantiated\n\nIt also registers the `contextmenuService` for opening and closing menus manually. Exposed methods:\n\n * `open` with arguments:\n    - triggerElement, contentTemplateUrl, aScope, position, doNotAutocloseOnClick\n * `close` - no arguments");
$templateCache.put("/library/dropdownNavigator/docs/readme.md","`dropdownNavigator` is a directive to visualize a vertical, multi-hierarchical navigator.\n\nIt uses `hierarchicalMenu` components for its items\' submenus. Consult demo.js in source for configuration options.");
$templateCache.put("/library/hierarchicalMenu/docs/readme.md","`hierarchicalMenu` is a directive for creating hierarchical menus.\n\nSee `dropdownMenu` structure in demo.js in source for configuration options.");
$templateCache.put("/library/isis-ui-filter-input/docs/readme.md","`filterInput` is a directive built on ngTagsInput for working as a filter-control");
$templateCache.put("/library/itemList/docs/readme.md","`itemList` renders content as a list-group with extra options. Depends on jQuery UI (not bundled) if sortable option used.");
$templateCache.put("/library/simpleDialog/docs/readme.md","`simpleDialog` is a service for quick creation of confirm dialogs. It is a wrapper around [Bootstrap modals](http://angular-ui.github.io/bootstrap)\nand inherits all of its options.\n\nThe dialog creation is invoked through the `open(options)` method.\n\n`simpleDialog`-specific options are:\n\n * `dialogTitle`\n * `dialogContentTemplate` - the body of the dialog. Url or id of Angular-template (eg. if preloaded)\n * `onOk` - callback on OK\n * `onCancel` - callback on Cancel\n * `validator` - a function, if set, invoked when OK is clicked. Needs to return `true` to close dialog and result OK.\n\n`controller` and `template` are used internally. Do not set in options unless you would like to extend default functionality.");
$templateCache.put("/library/treeNavigator/docs/readme.md","`treeNavigator` is a tree component directive. It needs the following attributes:\n\n__`treeData`__ - Data to render in a recursive structure with the following node-schema:\n\n  * `label`: {string} label,\n  * `extraInfo`: {string} any extra info to display after label,\n  * `children`: {array} array of children after __children got loaded__,\n  * `childrenCount`: {int} indicates the number of children (0 if none),\n  * `nodeData`: {object} arbitrary data object,\n  * `iconClass`: {string} css classes for setting the node icon,\n  * `draggable`: {boolean} if node is draggable,\n  * `dragChannel`: {string} in which channel dragging happens,\n  * `dropChannel`: {string} from which channel should accept drops,\n  * `collapsedIconClass`: {string} to overwrite global setting,\n  * `expandedIconClass`: {string} to overwrite global setting,\n  * `unCollapsible`: {boolean} if true, node can not collapse.\n\n__`config`__ - Object with options and tree state.\n\nHeader options:\n\n   * `scopeMenu`: {array} a `hierarchical-menu`-structure to render as scope menu. User has to take care of\n   handling actions and any kind of reconfigurations when an item is clicked,\n   * `preferencesMenu`: {array} another `hierarchical-menu`-structure for the preferences menu (gear icon).\n\nIf `scopeMenu` or `preferencesMenu` is not set, header is not displayed.\n\nRendering options:\n\n   * `collapsedIconClass`: {string} default: \'icon-arrow-right\',\n   * `expandedIconClass`: {string} default: \'icon-arrow-down\',\n   * `folderIconClass`: {string} if set, this icon will decorate nodes with children,\n   * `showRootLabel`: {boolean} if root node should get displayed. False by default.\n\nEvent callbacks:\n\n   * `nodeClick`: {function(event, node)},\n   * `nodeDblclick`: {function(event, node)},\n   * `nodeContextmenuRenderer`: {function(event, node)},\n   * `nodeExpanderClick`: {function(event, node, isExpand)},\n   * `loadChildren`: {function(event, node)}.\n\nTree state:\n\n   * `activeNode`: {string} id of active node,\n   * `selectedNodes`: {array} of node ids,\n   * `expandedNodes`: {array} of node ids\n   * `activeScope`: {string} id of active scope");}]);