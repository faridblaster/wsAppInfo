/**
 * Created by piyush on 10/10/15.
 */
db={};

if(Meteor.isClient){
    db.onlineUser=new Mongo.Collection('onlineUser');
    db.traffic=new Mongo.Collection('traffic');
}

if(Meteor.isServer){
    db.onlineUser=new Mongo.Collection('onlineUser',{connection:null});
    db.traffic=new Mongo.Collection('traffic',{connection:null});
}
