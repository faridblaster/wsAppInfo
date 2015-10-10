/**
 * Created by piyush on 10/10/15.
 */
Meteor.methods({
   getuserCount:function(){
       return Meteor.users.find({}).count();
   },
    beginMemeory:function(){
       memory= Meteor.setInterval(function(){
            var os=Npm.require('os'),
                totMemory=os.totalmem(),
                usedMemory=os.freemem(),
                memPer=(usedMemory/totMemory);
            var memRam= Math.ceil(memPer*100);
                if(db.memory.findOne({type:'ram'}))
                    db.memory.update({type:'ram'},{$set:{value:memRam}});
                else
                    db.memory.insert({type:'ram',value:memRam});
        },5000);
    },
    serverInfo:function(){
        return getServerInfo();
    }

});
var getServerInfo=function(){
    var os = Npm.require('os');
    return {
        host:os.hostname(),
        memory:Math.ceil(os.totalmem()/(1073741824)),
        platform:os.platform(),
        release:os.release(),

    }
};
Meteor.startup(function(){



    Meteor.users.find({'profile.online':true}).observe({
        added: function(id) {
            if(!db.onlineUser.findOne({user:id._id}))
                 db.onlineUser.insert({user:id._id});
        },
        removed: function(id) {
            db.onlineUser.remove({user:id._id});
        }
    });
});


