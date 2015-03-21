app.controller('navCtrl', function ($scope, $mdDialog, $mdToast, $translate) {
    $scope.showSetting = function (evt) {
        $mdDialog.show({
            controller: settingController,
            templateUrl: 'views/setting.html',
            targetEvent: evt,
        });
        evt.stopPropagation();
    };
    $scope.saveFile = function (evt) {
        isSaved = 'true';
        if ($scope.editor.src) {
            var fileSrc = $scope.editor.src;
            fs.writeFile(fileSrc, $scope.editor.context);
            $translate('SAVED').then(function (saved) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content(saved)
                        .position('right top')
                    )
                }

            );
        } else {
            $('#dialog-saveFile').trigger('click');
            $('#dialog-saveFile').change(function () {
                $scope.editor.src = this.value;
                var fileSrc = $scope.editor.src;
                fs.writeFile(fileSrc, $scope.editor.context);
            });
        }
    };
    $scope.openFile = function (evt) {
        if (isSaved) {
            openFileAction();
            evt.stopPropagation();
        } else {
            $mdDialog.show({
                controller: openDialogController,
                templateUrl: 'views/saveDialog.html',
                targetEvent: evt,
            });
            evt.stopPropagation();
        }
    };
    $scope.newFile = function (evt) {
        if (isSaved) {
            $("#editor-context").val('');
            evt.stopPropagation();
        } else {
            $mdDialog.show({
                controller: newDialogController,
                templateUrl: 'views/saveDialog.html',
                targetEvent: evt,
            });
            evt.stopPropagation();
        }
    }

    function openFileAction() {
        $('#dialog-openFile').trigger('click');
        $('#dialog-openFile').change(function () {
            $scope.editor.src = this.value;
            var fileSrc = $scope.editor.src;
            fs.readFile(fileSrc, 'utf8', function (err, data) {
                $scope.editor.context = data;
                $scope.editor.parsed = marked($scope.editor.context);
                $scope.$apply();
            });
        });

    }

    function newDialogController($scope, $mdDialog) {
        $scope.throwAway = function () {
            $("#editor-context").val('');
            $mdDialog.hide();

        };
        $scope.cacelDialog = function () {
            $mdDialog.hide();
        };
    }

    function openDialogController($scope, $mdDialog) {
        $scope.throwAway = function () {
            openFileAction();
            $mdDialog.hide();
            evt.stopPropagation();

        };
        $scope.cacelDialog = function () {
            $mdDialog.hide();
        };
    }

    function settingController($scope, $translate, $mdDialog) {
        $scope.closeDialog = function () {
            $mdDialog.hide();
        };
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }
});