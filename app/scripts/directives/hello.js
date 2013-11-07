'use strict';

angular.module('sandboxApp')
    .directive('hello', function ($animate) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                name: '=ngModel'
            },
            template: '<h1 ng-show="name">Hello {{name}}</h1>'
        };
    });
