'use strict';

angular.module('callCenterApp')
    .controller('AgentController', ['sessionFactory', function(sessionFactory) {

    var vm = this;

    sessionFactory.get({}, function onSuccess(response) {
        vm.configuration = response && response.data && response.data.configuration
    });

}]);
