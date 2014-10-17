'use strict';

app.directive('logo', [function () {
  return {
    restrict: 'E',
    replace: true,
    link: function (scope, iElement, iAttrs) {
    },
    templateUrl: 'scripts/directives/directive.logo.html'
  };
}]);