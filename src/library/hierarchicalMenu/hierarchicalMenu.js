/*globals window, angular*/
'use strict';

angular.module(
  'isis.ui.hierarchicalMenu', [
    'ui.bootstrap',
    'isis.ui.components'
  ]
).directive(
  'hierarchicalMenu', ['$document',
    function ($document) {

      return {
        scope: {
          menu: '=',
          config: '='
        },
        restrict: 'E',

        replace: true,
        templateUrl: '/isis-ui-components/templates/hierarchicalMenu.html',

        link: function ($scope, element) {

          var whichSideToDropSubs,
            doc = $document[0].documentElement;

          whichSideToDropSubs = function () {

            var docLeft = ( window.pageXOffset || doc.scrollLeft ) - ( doc.clientLeft || 0 ),
              width = element[0].scrollWidth,
              rightBorderX = element[0].getBoundingClientRect().right,
              wouldBeRightBorderOfSub,
              docWidth = doc.clientWidth + docLeft;

            wouldBeRightBorderOfSub = width + rightBorderX;

            if (docWidth < wouldBeRightBorderOfSub) {
              element.addClass('drop-left');
            } else {
              element.removeClass('drop-left');
            }

          };

          whichSideToDropSubs();

          $scope.$watch(
            function () {
              return element[0].scrollWidth;
            },

            function () {
              whichSideToDropSubs();
            }
          );

        }
      };
    }]);
