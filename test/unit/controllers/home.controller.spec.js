'use strict';

describe('Controller: IndexController', function() {

    beforeEach(module('callCenterApp'));

    var IndexController, scope, $httpBackend;

    beforeEach(inject(function($controller, _$httpBackend_, $rootScope, menuFactory, corporateFactory) {

        $httpBackend = _$httpBackend_;

        $httpBackend.expectGET("http://localhost:3000/dishes/0").respond(
            {
                "id": 0,
                "name": "Uthapizza",
                "image": "images/uthapizza.png",
                "category": "mains",
                "label": "Hot",
                "price": "4.99",
                "description": "A",
                "comments":[{}]
            });

        $httpBackend.expectGET("http://localhost:3000/promotions/0").respond(
                {
                    "id": 0,
                    "name": "Weekend Grand Buffet",
                    "image": "images/buffet.png",
                    "label": "New",
                    "price": "19.99",
                    "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowingbubbly and soft drinks. All for just $19.99 per person "
                }
        );

        $httpBackend.expectGET("http://localhost:3000/leadership/3").respond(
            {
                "id": 0,
                "name": "Peter Pan",
                "image": "images/alberto.png",
                "designation": "Chief Epicurious Officer",
                "abbr": "CEO",
                "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
            }
        );

        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
           $scope: scope,
           menuFactory: menuFactory,
           corporateFactory: corporateFactory
        });
        $httpBackend.flush();
    }));

    it('should create promotions with 1 promotion fetched from xhr', function() {
       expect(scope.promotion).toBeDefined();
    });

    it('should create leadership with 1 leader fetched from xhr', function() {
        expect(scope.leader).toBeDefined();
    });

});