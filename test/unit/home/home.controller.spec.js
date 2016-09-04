'use strict';

describe('Controller: IndexController', function() {

    beforeEach(module('callCenterApp'));

    var IndexController, scope, $httpBackend;

    beforeEach(inject(function($controller, _$httpBackend_, $rootScope, menuFactory, corporateFactory) {

        $httpBackend = _$httpBackend_;

        $httpBackend.expectGET('http://localhost:3000/api/setup/validate').respond({});


        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
           $scope: scope,
           menuFactory: menuFactory,
           corporateFactory: corporateFactory
        });
        $httpBackend.flush();
    }));

    it('should validate setup', function() {
        expect(IndexController.hasValidSetup()).toBeTruthy();
    });

    xit('should create promotions with 1 promotion fetched from xhr', function() {
       expect(scope.promotion).toBeDefined();
    });

    xit('should create leadership with 1 leader fetched from xhr', function() {
        expect(scope.leader).toBeDefined();
    });

});