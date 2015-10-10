/**
 * Created by piyush on 10/10/15.
 */
Template.onlineUser.onCreated(function(){
   this.subscribe('onlineUsers');
});
Template.onlineUser.helpers({
   onlineUserCount:function(){
      return db.onlineUser.find({}).count();
   }
});