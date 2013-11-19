'use strict';

angular.module('sandboxApp')
    .controller('MainCtrl', function ($scope, GetCommitsService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.username = null;
        $scope.commits = [];
        $scope.loading = false;

        $scope.getCommits = function () {
            $scope.loading = true;
            GetCommitsService.callWebService().then(function (data) {
                $scope.commits = data.commits;
                $scope.loading = false;
            });
        };
    });
