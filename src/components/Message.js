import React from 'react';

function Message({id, type, firstInitial, content}) {
  return (
    <li key={id} className={`message ${type}`}>
      <div className="icon">{firstInitial}</div>
      <span className="content">{content}</span>
    </li>
  )
}

export default Message;