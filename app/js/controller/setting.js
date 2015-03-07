app.controller('settingCtrl', ['$translate', '$scope', function ($translate, $scope) {

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);