import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onMouseEnter, onMouseLeave, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    );
};

export default Modal;
