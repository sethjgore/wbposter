'use strict';

app.controller('DrawerCtrl', ['$scope', '$http', 'Fonts', 'Colors', 'Config', function($scope, $http, Fonts, Colors, Config) {

    $scope.data = {};
    $scope.data.fonts = Fonts.all;
    $scope.data.colors = Colors.all;
    $scope.data.messageColor = Config.all.app.colorpiano.init.message.color;
    $scope.data.backgroundColor = Config.all.app.colorpiano.init.background.color;
    $scope.data.messageFont =

    console.log($scope.data.messageFont);

    $scope.data.message = null;

    $http.get('scripts/services/message.md').success(function(data) {

        $scope.data.message = data;

    });

}]);
