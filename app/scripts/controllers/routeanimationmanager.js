'use strict';

/**
 * @ngdoc function
 * @name mziolekplApp.controller:RouteanimationmanagerCtrl
 * @description
 * # RouteanimationmanagerCtrl
 * Controller of the mziolekplApp
 */
angular.module('mziolekplApp')
    .controller('RouteanimationmanagerCtrl', function ($scope, $rootScope) {
        $rootScope.$on("$routeChangeStart", function (event, current, previous, rejection) {
            var ctrlName = current.controller;
            $scope.currentView = ctrlName.slice(0,-4).toLowerCase();    
        });
    });
