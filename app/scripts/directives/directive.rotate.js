'use strict';

app.directive('rotate', [function () {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      var $el = angular.element(el[0]);
      console.log($el);
      scope.attrs = attrs;
      $el.addClass('sup');
    },
    template:''
  };
}]);