import React from 'react';
import { contacts } from '../data'
import Contact from './Contact'



function ContactsList() {

  const allContacts = contacts.map(contact => {
    return <Contact firstInitial={contact.name.charAt(0)} name={contact.name} key={contact.id}/>
  })

  return (
    <nav>
      <ul className="contacts">
        {allContacts}
      </ul>
    </nav>
  )
}

export default ContactsList;