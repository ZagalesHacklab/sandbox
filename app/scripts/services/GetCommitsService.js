'use strict';

angular.module('sandboxApp')
    .factory('GetCommitsService', function ($http, $q) {
        var currentQuery = null;

        function callWebService() {

            var url = 'https://api.github.com/repos/ZagalesHacklab/sandbox/commits';

            if (currentQuery) {
                currentQuery.resolve();
            }
            currentQuery = $q.defer();

            $http.defaults.cache = false;

            return $http({
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },
                url: url,
                timeout: currentQuery.promise
            }).then(function (response) {
                    currentQuery = null;
                    return wrapResponse(response.data);
                });
        }


        function wrapResponse(data) {
            var wrappedData = {
                error: null,
                commits: []
            };

            try {
                wrappedData.commits = data;
            } catch (e) {
                wrappedData.error = 'Error desconocido';
            }

            return wrappedData;
        }

        return {
            'callWebService': callWebService
        };
    });
