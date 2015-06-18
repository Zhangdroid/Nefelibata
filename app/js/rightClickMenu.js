function Menu() {

  var menu = new gui.Menu()

  , cut = new gui.MenuItem({
    label: "剪切",
    click: function() {
      document.execCommand("cut");
    }
  })

  , copy = new gui.MenuItem({
    label: "复制",
    click: function() {
      document.execCommand("copy");
    }
  })

  , paste = new gui.MenuItem({
    label: "粘贴",
    click: function() {
      document.execCommand("paste");
    }
  });

  menu.append(cut);
  menu.append(copy);
  menu.append(paste);

  return menu;
}

var menu = new Menu();
$(document).on("contextmenu", function(e) {
  e.preventDefault();
  menu.popup(e.originalEvent.x, e.originalEvent.y);
});