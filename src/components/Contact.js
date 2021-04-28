import React from 'react';

function Contact({firstInitial, name, id}) {


  return (
    <li key={id} className="contact">
      <div className="icon">{firstInitial}</div>
      {name}
    </li>
  )
}

export default Contact;