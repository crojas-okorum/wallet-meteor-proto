import { Meteor } from 'meteor/meteor'
import { ContacsCollection } from './ContacsCollection'

Meteor.publish('allContacts', function publishAllContatcs(){
    return ContacsCollection.find()
})