import { ContacsCollection } from "./ContacsCollection"
import { Meteor } from 'meteor/meteor'
import { check } from  'meteor/check'


Meteor.methods({
    'contacts.insert'({name,email,imageUrl}){
        check(name,String);
        check(email,String);
        check(imageUrl,String);
        if(!name){
            throw new Meteor.Error('Name is Requiered');
        }
        return ContacsCollection.insert({name,email,imageUrl,createdAt:new Date()})
    },
    'contacts.remove'({contactId}){
        check(contactId,String);
        ContacsCollection.remove(contactId);
    },
    'contacts.archive'({contactId}){
        check(contactId,String);
        ContacsCollection.update({_id:contactId},{$set:{archived:true}});
    }

})