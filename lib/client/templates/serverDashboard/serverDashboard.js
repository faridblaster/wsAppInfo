/**
 * Created by piyush on 10/10/15.
 */
Template.wsAppInfo.onRendered(function(){
   $('body').addClass('bg-body');
});

Template.wsAppInfo.onDestroyed(function(){
    $('body').removeClass('bg-body');
});