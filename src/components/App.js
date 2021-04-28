import React from "react";
import ContactsList from './ContactsList';
import MessageContainer from './MessageContainer'


function App() {
  return (
    <div className="app">
      <ContactsList />
      <MessageContainer />
    </div>
  );
}

export default App;
