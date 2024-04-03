import React from 'react';
import { Box, Button, FormControl, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import {useModal} from "../../../../Common/Modal/modal-provider";
import aboutUs from '../../../Profile/about Us/aboutUs';

const PriceModal = () => {
    const { openModal ,closeModal} = useModal();

    const handleClose=()=>{
        closeModal()
    }

    const styles = {
        container: {
            width: '100%',
            padding: '24px 32px',
            boxSizing: 'border-box',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        inputBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '4px 0 16px',
        },
        title: {
            fontSize: '24px',
            fontWeight: 700,
        },
        text: {
            color: '#000',
            fontSize: '24px',
            fontWeight: 400,
            position: 'relative',
            transform: 'none',
        },
        input: {
            '>div>fieldset': {
                borderRadius: '8px',
            },
        },
        btn: {
            background: '#007BFF',
            color: '#fff',
            padding: '10px',
            ':hover': {
                background: '#045dbd',
            },
        },
    };

    return (
        <>
            <Box sx={styles.container}>
                <form style={styles.content}>
                    <Typography sx={styles.title}>
                        Predict
                    </Typography>
                    <FormControl sx={styles.inputBox}>
                        <InputLabel sx={styles.text} htmlFor='bootstrap-input'>
                            Amount (Per Unit)
                        </InputLabel>
                        <FormControl>
                            <TextField
                                sx={styles.input}
                                type='number'
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>AED</InputAdornment>,
                                }} />
                        </FormControl>
                    </FormControl>
                    <Button sx={styles.btn} onClick={handleClose}>
                        SAVE
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default PriceModal;