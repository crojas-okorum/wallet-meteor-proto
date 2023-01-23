import { ContacsCollection } from "./ContacsCollection"


Meteor.methods({
    'contacts.insert'({name,email,imageUrl}){
        if(!name){
            throw new Meteor.Error('Name is Requiered');
        }
        return ContacsCollection.insert({name,email,imageUrl})
    }
})