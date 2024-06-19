import styles from './app.module.css';
import ChatBox from './components/ChatBox';
import ChatPreviewCard from './components/ChatPreview';

function App() {
  return (
    <div className="App">
      <div className={styles.dashboard}>
        <div className={styles.contactsContainer}>
          <span className={styles.chatHeader}>
            <p>
              Chats
            </p>
          </span>
          <ChatPreviewCard type={'preview'} />
          <ChatPreviewCard type={'preview'} />
          <ChatPreviewCard type={'preview'} />
        </div>
        <div className={styles.chatContainer}>
          <div className="profileChatHeader">
            <ChatPreviewCard type={'chat'} />
          </div>
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;
