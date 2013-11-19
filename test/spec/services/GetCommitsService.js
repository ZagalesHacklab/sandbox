'use strict';

describe('Service: GetCommitsService', function ($httpBackend) {
    var $httpBackend, scope;
    var GetCommitsService;

    // load the service's module
    beforeEach(module('sandboxApp'));

    beforeEach(inject(function (_GetCommitsService_) {
        GetCommitsService = _GetCommitsService_;
    }));

    beforeEach(inject(function ($rootScope) {

        scope = $rootScope.$new();
        scope.response = [];

       // jasmine.getJSONFixtures().fixturesPath = 'test/mock';
        $httpBackend.whenGET('https://api.github.com/repos/ZagalesHacklab/sandbox/commits').respond(
            jasmine.getJSONFixture('github_commits.json')
        );

        scope.$apply(function() {
            GetCommitsService.callWebService().then(function(data) {
                console.log('**************************************');
                console.log(data);
                scope.data = data;
            });
            $httpBackend.flush();
        });
    }));


    it('should do something', function () {
        console.log(scope.response);

        // expect(scope.data.length).toBe(59);
    });


//    it('should make one call to mock service and retrieve something', function () {
//        var cb = jasmine.createSpy();
//        http.get("/mock/message/1").success(cb);
//        waitsFor(function () {
//            return cb.callCount > 0
//        }, 'should succeed', 2000);
//        root.$apply();
//        httpBackend.flush();
//        runs(function () {
//            expect(cb).toHaveBeenCalled();
//        });
//    });

});
