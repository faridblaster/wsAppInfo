/**
 * Created by piyush on 10/11/15.
 */
Template.userCount.onCreated(function(){
    var instance=this;
    instance.totUsers=new ReactiveVar(0);
    Meteor.call('getuserCount',function(err,res){
        if(res)
            instance.totUsers.set(res);
    });

});
Template.userCount.onRendered(function(){
    this.fetchTotaluser=setInterval(function(){
        Meteor.call('getuserCount',function(err,res){
            if(res)
                instance.totUsers.set(res);
        });

    },5000);
});
Template.userCount.helpers({
   getTotalUser:function(){
       return Template.instance().totUsers.get();
   }
});