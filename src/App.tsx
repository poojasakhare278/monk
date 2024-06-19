import React from 'react';
import styles from './app.module.css';
import ChatBox from './components/ChatBox';
import ChatPreviewCard from './components/ChatPreview';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const contacts = useSelector((state: RootState) => state.chat.contacts);
  const selectedContactId = useSelector((state: RootState) => state.chat.selectedContactId);
  const selectedContact = contacts.find(contact => contact.userId === selectedContactId);

  return (
    <div className="App">
      <div className={styles.dashboard}>
        <div className={styles.contactsContainer}>
          <span className={styles.chatHeader}>
            <p>Chats</p>
          </span>
          {contacts.map(contact => (
            <ChatPreviewCard key={contact.userId} contact={contact} type="preview" />
          ))}
        </div>
        {selectedContact && (
          <div className={styles.chatContainer}>
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
