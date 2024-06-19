import React from 'react';
import TextNode from './TextNode';
import styles from './ChatBox.module.css';

interface ChatBoxProps {
    chat: {
        [key: string]: {
            message: string;
            timeStamp: string;
        };
    }[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ chat }) => {
    return (
        <>
            <div className={styles.chatArea}>
                {chat.map((message, index) => (
                    <TextNode key={index} message={message} />
                ))}
            </div>
            <div className={styles.chatFooter}>
                <div className={styles.add}><img src="/plus.png" alt="" /></div>
                <div className={styles.voice}><img src="/mic.png" alt="" /></div>
                <div className={styles.messageBox}>
                    <p className={styles.message}>
                        Message
                    </p>
                </div>
            </div>
        </>
    );
};

export default ChatBox;
