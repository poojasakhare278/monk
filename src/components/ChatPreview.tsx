import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectContact, markAsUnread, deleteConversation } from '../store/chatSlice';
import Modal from './Modal';
import styles from './chatPreview.module.css';

interface ChatPreviewCardProps {
    contact: {
        userId: string;
        name: string;
        unreadCount: number;
        profilePictureURL: string;
        chat: {
            [key: string]: {
                message: string;
                timeStamp: string;
            };
        }[];
    };
    type: string;
    showChatWithBackButton?: () => void;
}

const ChatPreviewCard: React.FC<ChatPreviewCardProps> = ({ contact, type, showChatWithBackButton }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactClick = () => {
        dispatch(selectContact(contact.userId));
    };

    const handleClick = () => {
        showChatWithBackButton && showChatWithBackButton()
    }

    const handleMarkAsUnread = () => {
        dispatch(markAsUnread(contact.userId));
        setIsModalOpen(false);
    };

    const handleDeleteConversation = () => {
        dispatch(deleteConversation(contact.userId));
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={`${styles.reviewContainer} ${type === 'chat' && styles.bgHighlight}`} onClick={handleContactClick}>
            <div className={styles.reviewContainerIn}>
                <div className={styles.profile}>
                    <img src={contact.profilePictureURL} alt={contact.name} className={styles.profilePicture} />
                </div>
                <div className={styles.personInfo} onClick={handleClick}>
                    <div className={styles.profileName}>{contact.name}
                        <div className={`${styles.onlineStatus} ${type === 'chat' ? styles.sideStatus : styles.bottomStatus}`}></div>
                    </div>
                    <div className={styles.lastMessage}>
                        {type === 'chat' ? 'Click here for contact info' : contact.chat[contact.chat.length - 1][Object.keys(contact.chat[contact.chat.length - 1])[0]].message}
                    </div>
                    {contact.unreadCount > 0 && type !== 'chat' && <div className={styles.unreadCount}>{contact.unreadCount}</div>}
                </div>
            </div>
            <div className={styles.actionButtons}>
                {type === 'chat' && <div className={styles.editIcon}><img src="/videocamera.png" alt="" className={styles.video} /></div>}
                {type === 'chat' && <div className={styles.editIcon}><img src="/telephone.png" alt="" /></div>}
                <div className={styles.editIcon} onClick={() => setIsModalOpen(true)}>
                    <img src="/ellipsis.png" alt="" />

                </div>
                {type !== 'chat' && (
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <div className={styles.menuItem} onClick={handleMarkAsUnread}>
                            Mark as unread
                        </div>
                        <div className={styles.menuItem} onClick={handleDeleteConversation}>
                            Delete conversation
                        </div>
                        <div className={styles.menuItem} onClick={handleCancel}>
                            Cancel
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default ChatPreviewCard;
