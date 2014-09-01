/*globals define, console, alert, window, angular*/

define([
  'angular'
], function () {
  'use strict';

  angular.module(

    'isis.filters', [])

  .filter('orderObjectBy', function () {
    return function (items, field, reverse) {

      var filtered = [];

      angular.forEach(items, function (item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return (a[field] > b[field] ? 1 : -1);
      });

      if (reverse) {
        filtered.reverse();
      }

      console.log(field, filtered);

      return filtered;

    };

  });

});