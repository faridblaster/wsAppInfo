
Package.describe({
    name: "wsnepal:app-info",
    summary: "monitor meteor app user traffic & memory usage",
    version: "0.0.1",
    git: "https://github.com/wsNepal/serverstatus"
});
Package.onUse(function(api){
    api.versionsFrom(['METEOR@1.0']);
    api.use(['standard-minifiers@1.0.1','templating','accounts-base','mizzao:user-status@0.1.7','mongo','reactive-var','maazalik:highcharts-gauge@0.3.1']);
    api.addFiles([
        'lib/client/configs/style.css',
        'lib/client/configs/highChartStyle.js',
        'lib/client/configs/highChart-gauge.js',
        'lib/client/configs/gridSystem.css',

        'lib/client/templates/serverDashboard/serverDashboard.html',
        'lib/client/templates/serverDashboard/serverDashboard.js',

        'lib/client/templates/osInfo/os.html',
        'lib/client/templates/osInfo/os.js',

        'lib/client/templates/userCount/userCount.html',
        'lib/client/templates/userCount/userCount.js',
        'lib/client/templates/userCount/online/onlineUser.html',
        'lib/client/templates/userCount/online/onlineUser.js',

        'lib/client/templates/memory/ram.html',
        'lib/client/templates/memory/ram.js',

    ],'client');

    api.addFiles([
        'lib/server/methods.js',
        'lib/server/publish.js'
    ],'server');

    api.addFiles([
       'lib/both/collections.js'
    ],['client','server'])
});
