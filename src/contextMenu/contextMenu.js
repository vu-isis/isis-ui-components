/*globals define, angular, alert*/

// Parts based on https://github.com/ianwalter/ng-context-menu

define([
  'angular',
  'text!./templates/contextmenu.html',

  './../hierarchicalMenu/hierarchicalMenu',
  'css!./styles/contextMenu.css'

], function (ng, template) {

  "use strict";

  angular.module(
      'isis.ui.contextMenu',
      [ 'isis.ui.hierarchicalMenu' ]
    )
    .factory(
      'contextmenuService', ['$document', '$compile', '$window',
        function ($document, $compile, $window) {

          var
            service = {},
            setPosition,
            body = $document.find('body').eq(0),
            doc = $document[0].documentElement,
            widthWatcher, heightWatcher,
            menuScope,
            opened = false,
            handleKeyUpEvent,
            handleMouseDownEvent,
            handleClickEvent,
            handleScrollEvent,
            handleResizeEvent,
            handleBlurEvent,
            bindEvents,
            unBindEvents,
            window = angular.element(
              $window
            );

          handleKeyUpEvent = function (event) {
            if (opened && event.keyCode === 27) {
              service.close();
            }
          };

          handleMouseDownEvent = function (event) {
            if (opened &&
              service.menuElement && !$.contains(service.menuElement[0], event.target)) {
              service.close();
            }
          };

          handleClickEvent = function (event) {
            if (opened &&
              (event.button !== 2 || event.target !== service.element)) {
              service.close();
            }
          };

          handleScrollEvent = function (event) {
            if (opened) {
              service.close();
            }
          };

          handleResizeEvent = function (event) {
            if (opened) {
              service.close();
            }
          };

          handleBlurEvent = function (event) {
            if (opened) {
              service.close();
            }
          };

          bindEvents = function () {
            $document.bind(
              'keyup', handleKeyUpEvent
            );
            // Firefox treats a right-click as a click and a contextmenu event while other browsers
            // just treat it as a contextmenu event

            $document.bind(
              'scroll', handleScrollEvent
            );

            window.bind(
              'resize', handleResizeEvent
            );
            window.bind(
              'blur', handleBlurEvent
            );

            $document.bind(
              'click', handleClickEvent
            );
            $document.bind(
              'mousedown', handleMouseDownEvent
            );
            $document.bind(
              'contextmenu', handleClickEvent
            );

          };

          /*unBindEvents = function () {
           $document.unbind(
           'keyup', handleKeyUpEvent
           );
           $document.unbind(
           'click', handleClickEvent
           );
           $document.unbind(
           'mousedown', handleMouseDownEvent
           );
           $document.unbind(
           'contextmenu', handleClickEvent
           );
           $document.unbind(
           'scroll', handleScrollEvent
           );
           window.unbind(
           'resize', handleResizeEvent
           );
           window.unbind(
           'blur', handleBlurEvent
           );
           };*/


          setPosition = function (position, menuElement) {

            var docLeft = ( window.pageXOffset || doc.scrollLeft ) - ( doc.clientLeft || 0 ),
              docTop = ( window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 ),

              elementHeight = menuElement[0].scrollHeight,
              elementWidth = menuElement[0].scrollWidth,

              docHeight = doc.clientHeight + docTop,
              docWidth = doc.clientWidth + docLeft,

              totalHeight = elementHeight + position.pageY,
              totalWidth = elementWidth + position.pageX,

              strechOverPageWidth = totalWidth - docWidth,
              strechOverPageHeight = totalHeight - docHeight,

              top = Math.max(
                position.pageY - docTop, 0
              ),

              left = Math.max(
                position.pageX - docLeft, 0
              );

            if (strechOverPageHeight > 0) {
              top = top - strechOverPageHeight;
            }

            if (strechOverPageWidth > 0) {
              left = left - strechOverPageWidth;
            }

            menuElement.css(
              'top', top + 'px'
            );
            menuElement.css(
              'left', left + 'px'
            );

            // Setting property of menu to drop on left side if no room on right for sub menus

          };

          service.open = function (triggerElement, contentTemplate, aScope, position) {

            var
              shellAngularElement = angular.element(template),
              menuDOMElement;

            service.close();

            menuScope = aScope.$new();

            shellAngularElement.append(angular.element(contentTemplate));
            menuDOMElement = $compile(shellAngularElement)(menuScope);
            body.append(menuDOMElement);
            service.menuElement = menuDOMElement;
            service.element = triggerElement;

            setPosition(position, menuDOMElement);

            widthWatcher = menuScope.$watch(
              function () {
                return menuDOMElement[0].scrollWidth;
              },

              function () {
                setPosition(position, menuDOMElement);
              }
            );

            heightWatcher = menuScope.$watch(
              function () {
                return menuDOMElement[0].scrollHeight;
              },

              function () {
                setPosition(position, menuDOMElement);
              }
            );

            bindEvents();
            opened = true;


          };

          service.close = function () {
            if (angular.isObject(menuScope) && angular.isFunction(menuScope.$destroy)) {
              service.menuElement.remove();
              menuScope.$destroy();
              menuScope = undefined;
              service.menuElement = null;
            }
          };

          service.element = null;

          return service;

        }])
    .directive(
      'contextmenu',

      ['$document', 'contextmenuService', '$window', '$rootScope', function ($document, contextmenuService, $window, $rootScope) {

        return {
          restrict: 'A',
          scope: {
            contextmenuConfig: '=',
            contextmenuData: '=',
            callback: '&contextmenu',
            disabled: '&contextMenuDisabled'
          },

          link: function ($scope, element) {

            var open,
              handleContextmenuEvent,
              hierarchicalMenuTemplate = '<hierarchical-menu menu="contextmenuData" config="contextmenuConfig"></hierarchical-menu>',

              options = {
                triggerEvent: 'contextmenu',
                contentTemplate: hierarchicalMenuTemplate
              };

            if (angular.isObject($scope.contextmenuConfig)) {
              angular.extend(options, $scope.contextmenuConfig);
            }

            open = function (event) {

              var position, bounds;

              position =  {
                pageX: event.pageX,
                pageY: event.pageY
              };

              if ($scope.contextmenuConfig && $scope.contextmenuConfig.position) {

                bounds = element[0].getBoundingClientRect();

                if ($scope.contextmenuConfig.position === 'left bottom') {

                  position.pageX = bounds.left;
                  position.pageY = bounds.bottom;

                } else if ($scope.contextmenuConfig.position === 'right bottom') {

                  position.pageX = bounds.right;
                  position.pageY = bounds.bottom;

                }
              }

              if (!$scope.disabled()) {
                contextmenuService.open(
                  element, options.contentTemplate, $scope, position
                );

              }
            };

            handleContextmenuEvent = function (event) {
              if (!$scope.disabled()) {

                contextmenuService.element = event.target;

                event.preventDefault();
                event.stopPropagation();

                $scope.$apply(
                  function () {

                    $scope.callback({ $event: event });

                    open(event);

                  }
                );
              }
            };

            element.bind(
              options.triggerEvent, handleContextmenuEvent
            );

            $scope.$on(
              '$destroy', function () {
                element.unbind(
                  'contextmenu', handleContextmenuEvent
                );
              }
            );
          }

        };
      }]);


});
