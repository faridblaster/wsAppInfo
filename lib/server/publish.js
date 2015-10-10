
Meteor.publish('onlineUsers',function(){
    return db.onlineUser.find({});
});