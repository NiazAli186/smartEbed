import React from 'react';
import {Typography} from '@mui/material';
import {useModal} from '../../../Common/Modal/modal-provider';
import {useNavigate} from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function FlashBackHeaderPartition(props) {

    const navigate = useNavigate();
    const {closeModal} = useModal();
    const handleClose =()=>{
        closeModal();
        navigate('/property/flat/type')
    }
    return (
        <>
           <Typography onClick={handleClose}><KeyboardBackspaceIcon/></Typography>
        </>

    );
}

export default FlashBackHeaderPartition;