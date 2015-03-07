app.controller('helpCtrl', function ($scope, hotkeys) {
    hotkeys.add({
        combo: 'ctrl+m',
        description: 'test',
        
        callback: function () {
            $('#help').css({
                'opacity': '0.7',
                'z-index': '999'
            });
        }
    });
    hotkeys.add({
        combo: 'ctrl+m',
        description: 'test',
        action: 'keyup',
        callback: function () {
            $('#help').css({
                'opacity': '0',
                'z-index': '-1'
            });
        }
    })
})