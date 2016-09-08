'use strict';

angular.module('callCenterApp')
        .controller('LoginController', ['$state', 'loginFactory', function($state, loginFactory) {

            var vm = this;
            vm.loginDetails = {
                worker: {
                    friendlyName: "",
                    endpoint: navigator.userAgent.toLowerCase() + Math.floor((Math.random() * 1000) + 1)
                }
            };

            vm.doLogin = function() {
                loginFactory.save(vm.loginDetails, function() {
                    $state.go('app.agent');
                });
                //    $http.post('/api/agents/login', { worker: $scope.worker, endpoint: endpoint })
            };
        }]);
