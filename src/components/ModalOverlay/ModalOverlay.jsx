import React from 'react';

import styles from './ModalOverlay.module.css';

const ModalOverlay = ({onOverlayClick}) => {
    return (
        <div className={`${styles.overlay}`} onClick={onOverlayClick}>
        </div>
    )
}


export default ModalOverlay;