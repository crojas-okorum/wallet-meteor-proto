import { Meteor } from 'meteor/meteor'
import { ContacsCollection } from './ContacsCollection'

Meteor.publish('allContacts', function publishAllContatcs(){
    return ContacsCollection.find()
})

Meteor.publish('contacta', function publishAllContatcs(){
    return ContacsCollection.find({archived:{$ne:true}})
})