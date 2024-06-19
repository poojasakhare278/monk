import { useState } from 'react';
import Modal from './Modal'
import styles from './chatPreview.module.css';

const ChatPreviewCard = (props: { type: string; }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={`${styles.reviewContainer} ${props.type === 'chat' && styles.bgHighlight}`}>
            <div className={styles.reviewContainerIn}>
                <div className={styles.profile}>
                    <img src="/profile.png" alt="" className={styles.profilePicture} />
                    <div className={`${styles.onlineStatus} ${props.type === 'chat' ? styles.sideStatus : styles.bottomStatus}`}></div>
                </div>
                <div className={styles.personInfo}>
                    <div className={styles.profileName}>Josh California</div>
                    <div className={styles.lastMessage}>I think top two are:</div>
                </div>
            </div>
            <div className={styles.actionButtons}>
                {(props.type === 'chat') && <div className={styles.editIcon}><img src="/videocamera.png" alt="" className={styles.video} /></div>}
                {(props.type === 'chat') && <div className={styles.editIcon}><img src="/telephone.png" alt="" /></div>}
                <div className={styles.editIcon} onClick={openModal}
                >
                    <img
                        src="/ellipsis.png"
                        alt=""
                    />
                    {(props.type !== 'chat') && <Modal isOpen={isModalOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClose={closeModal}>
                        <div className={styles.menuItem}>
                            Mark as unread
                        </div>
                        <div className={styles.menuItem}>
                            Mark as unread
                        </div>
                        <div className={styles.menuItem}>
                            Mark as unread
                        </div>
                    </Modal>}
                </div>
            </div>

        </div>
    );
}

export default ChatPreviewCard;
