'use strict';

/**
 * @ngdoc overview
 * @name mziolekplApp
 * @description
 * # mziolekplApp
 *
 * Main module of the application.
 */
angular
    .module('mziolekplApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ngTouch'
])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {
            animationConf: {
                about: 'unreveal',
                fallback: 'fade'
            }
        }
    })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data: {
            animationConf: {
                fallback: 'reveal'
            }
        }
    })
        .otherwise({
        redirectTo: '/'
    });
});
