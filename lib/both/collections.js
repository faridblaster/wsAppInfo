/**
 * Created by piyush on 10/10/15.
 */
db={};

if(Meteor.isClient){
    db.onlineUser=new Mongo.Collection('onlineUser');
    db.memory=new Mongo.Collection('memory');

}

if(Meteor.isServer){
    db.onlineUser=new Mongo.Collection('onlineUser',{connection:null});
    db.memory=new Mongo.Collection('memory',{connection:null});
}
