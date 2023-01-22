import React, { useState } from 'react'
import { ContacsCollection } from '../api/ContacsCollection';
export const ContactForm=()=>{
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const saveContact = () => {
        ContacsCollection.insert({name,email,imageUrl});
        setName('');
        setEmail('');
        setImageUrl('');
    }
    
    return(
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input value={name}
               id='name' 
               type="text" 
               onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email'
               value={email} 
               type="text"
               onChange={(e)=>{setEmail(e.target.value)}} />
      </div>
      <div>
        <label htmlFor='imageURL'>Image URL</label>
        <input id='imageUrl'
               value={imageUrl} 
               type="text"
               onChange={(e)=>{setImageUrl(e.target.value)}} />
      </div>
      <div>
        <button type='button' onClick={saveContact}>Save Contact</button>
      </div>
    </form>
    )
}