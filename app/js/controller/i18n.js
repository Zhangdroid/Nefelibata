var translationsEN = {
    NEW: 'NEW',
    OPEN: 'OPEN',
    SAVE: 'SAVE',
    SAVED: 'SAVED',
    CLOSE: 'ClOSE',
    CANCEL: 'CANCEL',
    SETTING: 'SETTING',
    ABOUT: 'About',
    HELP: 'Help',
    LANGUAGE: 'Language',
    TITLE:'Title',
    WHATSYOURSTORY:'What\'s your story today?',
    GOTIT: 'Got it!',
    SAVEDIALOGTITLE:'Your changes have not yet been saved！',
    SAVEDIALOGCONTENT: '确定要扔掉它吗？',
    BUTTON_LANG_ZH: '中文',
    BUTTON_LANG_EN: 'english'
};

var translationsZH = {
    NEW: '新建',
    OPEN: '打开',
    SAVE: '保存',
    SAVED: '已保存',
    CLOSE: '关闭',
    CANCEL: '取消',
    SETTING: '设置',
    ABOUT: '关于',
    HELP: '帮助',
    LANGUAGE: '语言',
    TITLE:'标题',
    WHATSYOURSTORY:'今天有什么故事呢？',
    GOTIT: '知道了！',
    SAVEDIALOGTITLE:'你的修改还未保存',
    SAVEDIALOGCONTENT: '确定要扔掉它吗？',
    BUTTON_LANG_ZH: '中文',
    BUTTON_LANG_EN: 'english'
};

app.config(['$translateProvider', function ($translateProvider) {
    // add translation tables
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('zh', translationsZH);
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');

    // remember language
    $translateProvider.useLocalStorage();
}]);

