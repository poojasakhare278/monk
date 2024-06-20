import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import ChatBox from './components/ChatBox';
import ChatPreviewCard from './components/ChatPreview';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const contacts = useSelector((state: RootState) => state.chat.contacts);
  const selectedContactId = useSelector((state: RootState) => state.chat.selectedContactId);
  const selectedContact = contacts.find(contact => contact.userId === selectedContactId);

  const [showChat, setShowChat] = useState(false);

  const showChatWithBackButton = () => {
    setShowChat(true);
  };

  const hideChat = () => {
    setShowChat(false);
  };
useEffect(() =>{
  console.log("showChat", showChat, selectedContact)
})
  return (
    <div className="App">
      <div className={styles.dashboard}>
        {/* Contacts Container */}
        <div className={`${styles.contactsContainer} ${showChat ? styles.hideContainer : ''}`}>
          <span className={styles.chatHeader}>
            <p>Chats</p>
          </span>
          {contacts.map(contact => (
            <div onClick={showChatWithBackButton}>
              <ChatPreviewCard key={contact.userId} contact={contact} type="preview"  />
            </div>
          ))}
        </div>
        {/* Chat Container */}
        {showChat && selectedContact && (
          <div className={styles.chatContainer}>
            <button onClick={hideChat} className={styles.backButton}>{"< Back"}</button>
            <div className="profileChatHeader">
              <ChatPreviewCard contact={selectedContact} type="chat" />
            </div>
            <ChatBox chat={selectedContact.chat} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
