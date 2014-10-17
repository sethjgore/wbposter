app.controller('DrawerCtrl', ['$scope', '$http', 'Fonts', 'Colors', function($scope, $http, Fonts, Colors) {

    $scope.data = {};
    $scope.data.colors = null;
    $scope.data.fonts = Fonts.all;
    $scope.data.colors = Colors.all;

    $scope.data.messageColor = 'black';
    $scope.data.backgroundColor = 'black';
    $scope.data.messageFont = $scope.data.fonts[1];

    $http.get('scripts/services/colors.json').success(function(data) {

    });



    $scope.data.message = null;

    $http.get('scripts/services/message.md').success(function(data) {

        $scope.data.message = data;

    });

}]);
