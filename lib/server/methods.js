/**
 * Created by piyush on 10/10/15.
 */
Meteor.methods({
   getuserCount:function(){
       return Meteor.users.find({}).count();
   }
});

Meteor.users.find({ "status.online": true }).observe({
    added: function(id) {
        db.onlineUser.insert({user:id});
    },
    removed: function(id) {
        db.onlineUser.remove({user:id});
    }
});