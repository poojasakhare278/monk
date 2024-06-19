import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    children: ReactNode;
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
