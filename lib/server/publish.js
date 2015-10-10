
Meteor.publish('onlineUsers',function(){
    return db.onlineUser.find({});
});
Meteor.publish('getMemory',function(){
   return db.memory.find({type:'ram'});
});
