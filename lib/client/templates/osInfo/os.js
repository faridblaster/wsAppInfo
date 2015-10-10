/**
 * Created by piyush on 10/11/15.
 */
Template.os.onCreated(function(){
   var instance=this;
    instance.serverInfo=new ReactiveVar(null);
    Meteor.call('serverInfo',function(err,res){
       if(res)
        instance.serverInfo.set(res);
    });
});
Template.os.helpers({
getInfo:function(){
    return Template.instance().serverInfo.get();
}
});
