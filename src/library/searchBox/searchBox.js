/*globals define, angular, alert*/


define([
    'angular',
    'text!./templates/searchBox.html',
    'css!./styles/searchBox.css'

], function(
    ng,
    template ){

    "use strict";

    angular.module(
        'isis.ui.searchBox',
        [
        ]

    ).directive(
        'searchBox',
         function () {

             return {
                 scope: {
                     handlers: '=',
                     config: '='
                 },
                 restrict: 'E',
                 replace: true,
                 template: template

             };
    });


});