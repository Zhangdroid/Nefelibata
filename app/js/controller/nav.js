app.controller('navCtrl', function ($scope, $mdDialog, $mdToast, $translate,Data) {
    $scope.data = Data;
    $scope.showSetting = function (evt) {
        $mdDialog.show({
            controller: settingController,
            templateUrl: 'views/setting.html',
            targetEvent: evt,
        });
        evt.stopPropagation();
        
    };
    $scope.showSaveDialog = function (evt) {
        $mdDialog.show({
            controller: saveDialogController,
            templateUrl: 'views/saveDialog.html',
            targetEvent: evt,
        })
        
    }
    
    $scope.saveFile = function () {
        isSaved = 'true';

        $translate('SAVED').then(function (saved) {
                $mdToast.show(
                    $mdToast.simple()
                    .content(saved)
                    .position('right top')
                )
            }

        );

    }
    $scope.openFile = function (evt) {
        if (isSaved) {
            $('#dialog-openFile').trigger('click');
/*            Data.src = $('#dialog-openFile').value;
            evt.stopPropagation();*/
        } else {
            $scope.showSaveDialog();
            evt.stopPropagation();
        }
        

    }

    $scope.newFile = function (evt) {
        if (isSaved) {
            $("#editor-context").val('');
            evt.stopPropagation();
        } else {
            $scope.showSaveDialog();
            evt.stopPropagation();
        }
    }

});





function settingController($scope, $translate, $mdDialog) {
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}

function saveDialogController($scope, $mdDialog) {
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
}