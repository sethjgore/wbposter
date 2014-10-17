'use strict';

app.directive('background', [function () {
  return {
    restrict: 'EA',
    scope:{},
    link: function (scope, el, attrs) {
      scope.attrs = attrs;
    },
    templateUrl : 'scripts/directives/directive.background.html',
  };
}]);