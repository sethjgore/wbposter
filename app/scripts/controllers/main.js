'use strict';

/**
 * @ngdoc function
 * @name webposter.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webposter
 */
app
  .controller('MainCtrl', function ($scope) {
    $scope.sentence = '';


    $scope.changeOpacity = function($event){
      console.log($event);
      console.log($event.target.classList);
      $event.target.classList.add('is__text--c-black');
      console.log($event.target.classList);
    };

    $scope.yell = function($event){
      console.log('hello!');
      console.log($event);
    };
  });
