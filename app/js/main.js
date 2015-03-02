/*var marked = require('marked');
var gui = require("nw.gui");
var fs = require("fs");*/



onload = function () {


  
  
  //set shortcuts
  
  KeyboardJS.on('ctrl + m', function () {
    $('#help').css('opacity','0.7');

  }, function () {
    $('#help').css('opacity','0');
  })
}