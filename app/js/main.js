/*var marked = require('marked');
var gui = require("nw.gui");
var fs = require("fs");*/


$(document).ready(function () {


    KeyboardJS.on('ctrl + m', function () {
        $('#help').css({
            'opacity': '0.7',
            'z-index': '999'
        });
    }, function () {
        $('#help').css({
            'opacity': '0',
            'z-index': '-1'
        });
    });
})