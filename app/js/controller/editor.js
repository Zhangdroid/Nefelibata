app.controller("editorController", function ($scope) {
    $scope.editor = {
        context: '',
        parsed: '',
        src:''
    };
    $scope.textChange = function () {
        isSaved = false;
        $scope.editor.parsed = marked($scope.editor.context);
    };
    $scope.onEditor = function (param) {
        var sel = $scope.getSelection();
        switch (param) {
        case "bold":
            if ($scope.hasSelection()) {
                // enhance
                $scope.insertText("**" + sel.text + "**", sel.start, sel.end);
            } else {
                // add new
                $scope.insertPlacehodler("**bold**", 2, 2);
            }
            break;
        case "italic":
            if ($scope.hasSelection()) {
                // enhance
                $scope.insertText("_" + sel.text + "_", sel.start, sel.end);
            } else {
                // add new
                $scope.insertPlacehodler("_italic_", 1, 1);
            }
            break;
        case "underline":
            if ($scope.hasSelection()) {
                // enhance
                $scope.insertText("<u>" + sel.text + "</u>", sel.start, sel.end);
            } else {
                // add new
                $scope.insertPlacehodler("<u>underline</u>", 3, 4);
            }
            break;
        case "list":
            sel.target.value += "\n";
            $scope.insertPlacehodler("- First item", 2, 0);
            break;
        case "list-2":
            sel.target.value += "\n";
            $scope.insertPlacehodler("1. First numbered item", 3, 0);
            break;
        case "header":
            sel.target.value += "\n";
            $scope.insertPlacehodler("# Header", 2, 0);
            break;
        case "url":
            sel.target.value += "\n";
            var aUrl = "[text](url)";
            $scope.insertPlacehodler(aUrl, 7, 1);

            break;
        case "img":

            sel.target.value += "\n";
            // insert new
            var aUrl = "![image text](url)";
            $scope.insertPlacehodler(aUrl, 14, 1);

            break;
        case "code":
            if ($scope.hasSelection()) {
                // enhance
                $scope.insertText("`" + sel.text + "`", sel.start, sel.end);
            } else {
                // add new
                sel.target.value += "\n";
                $scope.insertPlacehodler("<pre class='brush: language'>code here</pre>", 19, 17);
            }
            break;
        case "horline":
            sel.target.value += "\n---";
            sel.target.focus();
            break;
        case "quote":
            if ($scope.hasSelection()) {
                // enhance
                $scope.insertText("> " + sel.text, sel.start, sel.end);
            } else {
                // add new
                $scope.insertPlacehodler("> quote", 2, 0);
            }
            break;
        case "strikethrough":
            if ($scope.hasSelection()) {
                // enhance
                $scope.insertText("~~" + sel.text + "~~", sel.start, sel.end);
            } else {
                // add new
                $scope.insertPlacehodler("~~strikethrough~~", 2, 2);
            }
            break;
        }
    };

    $scope.hasSelection = function () {
        var ta = document.getElementById("editor-context");
        if (ta.selectionStart == ta.textLength) {
            return false;
        }
        return true;
    };

    $scope.getSelection = function () {
        var ta = document.getElementById("editor-context");

        return {
            target: ta,
            start: ta.selectionStart,
            end: ta.selectionEnd,
            text: ta.value.substring(ta.selectionStart, ta.selectionEnd)
        };
    };

    $scope.insertPlacehodler = function (text, padLeft, padRight) {
        var ta = document.getElementById("editor-context");
        ta.focus();
        ta.value += text;
        ta.selectionStart = ta.textLength - text.length + padLeft;
        ta.selectionEnd = ta.textLength - padRight;

    };

    $scope.insertText = function (text, start, end) {
        var ta = document.getElementById("editor-context");
        ta.focus();
        var leftText = ta.value.substring(0, start);
        var rightText = ta.value.substring(end);
        ta.value = leftText + text + rightText;
    };

});