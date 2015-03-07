app.controller('navCtrl', function ($scope, $mdDialog) {
    $scope.showSetting = function (ev) {
        $mdDialog.show({
            controller: settingController,
            templateUrl: 'views/setting.html',
            targetEvent: ev,
        })
    };

});






function settingController($scope, $translate, $mdDialog) {
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}