/**
 * Created by piyush on 10/10/15.
 */
Meteor.methods({
   getuserCount:function(){
       return Meteor.users.find({}).count();
   }
});