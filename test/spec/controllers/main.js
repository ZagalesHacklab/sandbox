'use strict';

describe('Controller: MainCtrl', function () {
    var expect = chai.expect;

    // load the controller's module
    beforeEach(module('sandboxApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings).length.is(3);
    });

    it ('should have a method to call the webservice', function () {
        expect(scope).to.respondTo('getCommits');
    });

});
