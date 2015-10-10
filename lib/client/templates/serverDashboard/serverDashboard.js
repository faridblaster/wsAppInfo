/**
 * Created by piyush on 10/10/15.
 */
Template.serverDashboard.onRendered(function(){
   $('body').addClass('bg-body');
});

Template.serverDashboard.onDestroyed(function(){
    $('body').removeClass('bg-body');
});