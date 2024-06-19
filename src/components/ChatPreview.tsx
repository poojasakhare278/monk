import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, markAsUnread, deleteConversation } from '../store/chatSlice';
import { openModal, closeModal } from '../store/modalSlice';
import Modal from './Modal';
import styles from './chatPreview.module.css';
import { RootState } from '../store';

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
}

const ChatPreviewCard: React.FC<ChatPreviewCardProps> = ({ contact, type }) => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

    const handleContactClick = () => {
        dispatch(selectContact(contact.userId));
    };

    const handleMarkAsUnread = () => {
        dispatch(markAsUnread(contact.userId));
        dispatch(closeModal());
    };

    const handleDeleteConversation = () => {
        dispatch(deleteConversation(contact.userId));
        dispatch(closeModal());
    };

    return (
        <div className={`${styles.reviewContainer} ${type === 'chat' && styles.bgHighlight}`} onClick={handleContactClick}>
            <div className={styles.reviewContainerIn}>
                <div className={styles.profile}>
                    <img src={contact.profilePictureURL} alt={contact.name} className={styles.profilePicture} />
                    <div className={`${styles.onlineStatus} ${type === 'chat' ? styles.sideStatus : styles.bottomStatus}`}></div>
                </div>
                <div className={styles.personInfo}>
                    <div className={styles.profileName}>{contact.name}</div>
                    <div className={styles.lastMessage}>
                        {contact.chat[contact.chat.length - 1][Object.keys(contact.chat[contact.chat.length - 1])[0]].message}
                    </div>
                    {contact.unreadCount > 0 && <div className={styles.unreadCount}>{contact.unreadCount}</div>}
                </div>
            </div>
            <div className={styles.actionButtons}>
                {type === 'chat' && <div className={styles.editIcon}><img src="/videocamera.png" alt="" className={styles.video} /></div>}
                {type === 'chat' && <div className={styles.editIcon}><img src="/telephone.png" alt="" /></div>}
                <div className={styles.editIcon} onClick={() => dispatch(openModal())}>
                    <img src="/ellipsis.png" alt="" />
                    {type !== 'chat' && (
                        <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
                            <div className={styles.menuItem} onClick={handleMarkAsUnread}>
                                Mark as unread
                            </div>
                            <div className={styles.menuItem} onClick={handleDeleteConversation}>
                                Delete conversation
                            </div>
                            <div className={styles.menuItem} onClick={() => dispatch(closeModal())}>
                                Cancel
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatPreviewCard;
