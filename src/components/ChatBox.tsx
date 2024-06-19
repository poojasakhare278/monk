import TextNode from "./TextNode";
import styles from './ChatBox.module.css';

function ChatBox() {
    return (<>
        <div className={styles.chatArea}>
            <TextNode />
        </div>
        <div className={styles.chatFooter}>
            <div className={styles.add}><img src="/plus.png" alt="" /></div>
            <div className={styles.voice}><img src="/mic.png" alt="" /></div>
            <div className={styles.messageBox}>
                <p className={styles.message}>
                    Message Josh California
                </p>
            </div>
        </div>
    </>);
}

export default ChatBox;