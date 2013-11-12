'use strict';

describe('Directive: hello', function () {
    beforeEach(module('sandboxApp'));

    var element;

    it('should make hidden element visible', inject(function ($rootScope, $compile) {
        $rootScope.name = 'francho';

        element = angular.element('<hello ng-model="name"></hello>');
        element = $compile(element)($rootScope);

        $rootScope.$digest();

        expect(element.text()).toBe('Hello francho');
    }));
});
