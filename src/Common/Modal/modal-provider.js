import React, { createContext, useContext, useState } from 'react';
import { Modal, Box } from '@mui/material';

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalStyle, setModalStyle] = useState({
        width: '',
        height: '',
    });

    const openModal = ({ content, style }) => {
        setModalContent(content);
        setIsOpen(true);
        if (style) {
            setModalStyle(style);
        }
        // style ? setModalStyle(style) : '';
    };

    const closeModal = () => {
        setModalContent(null);
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent }}>
            {children}
            <Modal open={isOpen} onClose={closeModal}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#FFF',
                    maxWidth: '400px',
                    overflowY: 'scroll',
                    width: modalStyle.width ? modalStyle.width : '100%',
                    height: modalStyle.height ? modalStyle.height : '100vh',
                    '::-webkit-scrollbar ': {
                        display: 'none',
                    },
                }}>
                    {modalContent}
                </Box>
            </Modal>
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
