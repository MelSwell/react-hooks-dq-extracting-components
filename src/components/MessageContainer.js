import React from 'react';
import { messages } from '../data'
import Message from './Message'

function MessageContainer() {

  const allMessages = messages.map(message => {
    return <Message 
            key={message.id} 
            type={message.type} 
            firstInitial={message.name.charAt(0)} 
            content={message.content}
          />
  })
  
  return (
    <main>
      <h2>Messages</h2>
      <section className="messages">
        <ul>
          {allMessages}
        </ul>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </section>
    </main>
  )
}

export default MessageContainer;