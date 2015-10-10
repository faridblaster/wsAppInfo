
Package.describe({
    name: "wsnepal:serverstatus",
    summary: "",
    version: "0.0.1",
    git: "https://github.com/wsNepal/serverstatus"
});
Package.onUse(function(api){
    api.versionsFrom(['METEOR@1.0']);
    api.use(['mrt:highcharts','standard-minifiers','templating','accounts-base']);
    api.addFiles([
        'lib/client/configs/style.css',
        'lib/client/templates/serverDashboard/serverDashboard.html',
        'lib/client/templates/serverDashboard/serverDashboard.js',
        'lib/client/templates/userCount/userCount.html'
    ],'client');
    api.addFiles(['lib/server/methods.js'],'server');
});
