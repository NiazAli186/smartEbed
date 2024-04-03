import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {useNavigate} from 'react-router-dom';
import {useModal} from '../../../Common/Modal/modal-provider';

function Partition(props) {

    const navigate = useNavigate();
    const { closeModal } = useModal();

    const handlesUserBalance=()=>{
        closeModal();
        navigate('/property/flat/userBalance')
    }

    const styles = {

        boxBalance2: {
            background: '#131313',
            height: '32.99rem',

        },
        gridContainer: {
            padding:'17px',
            background: '#ffffff',
        },
        gridContainerBtn: {
            paddingY: '20px',

        },
        gridItemsBtn: {
            textAlign: 'center',
        },

        btnDaller: {
            justifyContent: 'center',
            width:"90%",
            background:'#F3E75B',
            ':hover': {
                background: '#F3E75B',
            },
            color:'#343433',
            paddingY:'10px',
        },
        btnCall: {
            justifyContent: 'center',
            width:"90%",
            background:"#1E8EEB",
            ':hover': {
                background: '#1E8EEB',
            },
            color: '#FFFFFF',
            paddingY:'10px',
        },
        btnWhatsapp: {
            justifyContent: 'center',
            background: '#4DEB1E',
            width:"90%",
            ':hover': {
                background: '#4DEB1E',
            },
            color: '#FFFFFF',
            paddingY:'10px',
        },
    };
    return (
        <>

                <Box sx={styles.boxBalance2}>
                    <Grid container sx={styles.gridContainer}>
                        <Grid item xs={4} xs={4} sx={styles.gridItemsBtn}>
                            <Button sx={styles.btnDaller} onClick={handlesUserBalance}>
                                <AttachMoneyIcon/>
                            </Button>
                        </Grid>
                        <Grid item xs={4} sx={styles.gridItemsBtn}>
                            <Button sx={styles.btnCall}>
                                <CallIcon/>
                            </Button>
                        </Grid>
                        <Grid item xs={4} xs={4} sx={styles.gridItemsBtn}>
                            <Button sx={styles.btnWhatsapp}>
                                <WhatsAppIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </>
    );
}

export default Partition;