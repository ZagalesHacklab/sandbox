'use strict';

describe('Service: GetCommitsService', function () {
    var expect = chai.expect;
    var backend;
    var GetCommitsService;

    // load the service's module
    beforeEach(module('sandboxApp', 'sandboxMocks'));

    beforeEach(inject(function (_GetCommitsService_) {
        GetCommitsService = _GetCommitsService_;
    }));

    beforeEach(inject(function ($httpBackend, MockGithubCommits) {
        backend = $httpBackend;
        backend.whenGET('https://api.github.com/repos/ZagalesHacklab/sandbox/commits').respond(MockGithubCommits);
    }));

    it('should call a well known webservice using a promise', function () {

        var actual = null;;
        GetCommitsService.callWebService().then(function(data) {
            actual = data;
        });
        backend.flush();

        expect(actual).to.have.keys(['error','commits']);
        expect(actual.commits).length.is(6);
        var oneCommit = actual.commits[0];

        expect(oneCommit).to.have.property('sha');
        expect(oneCommit).to.have.property('commit');
        expect(oneCommit).to.have.property('html_url');
        expect(oneCommit).to.have.property('author');

        var author = oneCommit.author;
        expect(author).to.have.property('login');
        expect(author).to.have.property('avatar_url');

        var commitInfo = oneCommit.commit;
        expect(commitInfo).to.have.property('message');

    });

});
