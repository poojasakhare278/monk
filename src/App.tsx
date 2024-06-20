import {useState } from 'react';
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

  return (
    <div className="App">
      <div className={styles.dashboard}>
        {/* Contacts Container */}
        <div className={`${styles.contactsContainer} ${showChat ? styles.hideContainer : ''}`}>
          <span className={styles.chatHeader}>
            <p>Chats</p>
          </span>
          {contacts.map(contact => (
            <div>
              <ChatPreviewCard key={contact.userId} contact={contact} type="preview" showChatWithBackButton={showChatWithBackButton}  />
            </div>
          ))}
        </div>
        {/* Chat Container */}
        {showChat && selectedContact && (
          <div className={styles.chatContainer}>
            <button onClick={hideChat} className={styles.backButton}>{"< Chats"}</button>
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
