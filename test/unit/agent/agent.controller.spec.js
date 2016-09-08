'use strict';

describe('Controller: AgentController', function() {

    beforeEach(module('callCenterApp'));

    var AgentController, $httpBackend, sessionFactory;

    beforeEach(inject(function($controller, _$httpBackend_, _sessionFactory_) {

        $httpBackend = _$httpBackend_;
        sessionFactory = _sessionFactory_;

        $httpBackend.expectGET('http://localhost:3001/api/agents/session').respond({data: {configuration: 'myconfig'}});

        AgentController = $controller('AgentController', {
            sessionFactory: sessionFactory
        });

        $httpBackend.flush();
    }));

    it('should call session api on initialization', function() {

        expect(AgentController.configuration).toBe('myconfig');
    });

});
