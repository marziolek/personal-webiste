'use strict';

/**
 * @ngdoc function
 * @name mziolekplApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mziolekplApp
 */
angular.module('mziolekplApp')
    .controller('AboutCtrl', function ($scope, $rootScope, $timeout) {
        $rootScope.className = 'about';
        
        $scope.bio = [];
        $timeout(function() {
            $scope.bio = ['Born in Cracow, Poland.','Live since 8<sup>th</sup> May 1990.','In a relationship.','Funny, hard working, coffee drinker.'];
        }, 2500);
    });
