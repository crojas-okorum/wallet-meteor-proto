import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';


export const App = () => (
  <div>
   <h1 className="text-3xl text-indigo-800">
      Welcome to Meteor + Tailwind!
    </h1>
    <ContactForm />
    <ContactList />
  </div>
);
