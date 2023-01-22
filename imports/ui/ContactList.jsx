import React from "react";
import { ContacsCollection } from "../api/ContacsCollection";
import {useTracker} from 'meteor/react-meteor-data';
export const ContactList = () =>{

    const contacts = useTracker(()=>{
        return ContacsCollection.find().fetch();
    });
    
    console.log(contacts)
   
    

    return (
        <>
            <h3>Contact List</h3>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>
          ))}
        </ul>
        </>
        
    )
}