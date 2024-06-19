import React from 'react';
import styles from './TextNode.module.css';

interface TextNodeProps {
    message: {
        [key: string]: {
            message: string;
            timeStamp: string;
        };
    };
}

const TextNode: React.FC<TextNodeProps> = ({ message }) => {
    return (
        <div className={styles.thread}>
            {Object.keys(message).map((user) => {
                const isYou = user === 'you';
                return (
                    <div key={user} className={!isYou ? styles.wrapperl : styles.wrapperr}>
                        <div className={`${styles.textNode} ${isYou ? styles.floatright : styles.floatleft}`}>
                            <p>{message[user].message}</p>
                            <span>{message[user].timeStamp}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default TextNode;
