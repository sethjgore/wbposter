'use strict';

/**
 * @ngdoc overview
 * @name wbposterApp
 * @description
 * # wbposterApp
 *
 * Main module of the application.
 */

 /* global app: true*/

var app = angular.module('webPoster', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-gestures',
    'ui.router'
  ]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'drawer' : {
            templateUrl : 'views/pages/hello.html',
            controller: 'DrawerCtrl'
          },
          'main' : {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        },
      })
      .state('poster', {
        url: '/poster',
        views: {
          'drawer' : {
            templateUrl : 'views/pages/posterpiano.html',
            controller: 'DrawerCtrl'
          },
          'main' : {
            templateUrl: 'views/blank.html',
            controller: 'MainCtrl'
          }
        },
      });
  });
