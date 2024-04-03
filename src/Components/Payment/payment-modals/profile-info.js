import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import yourLogo from '../../../Images/yourLogo.png';
import payment1 from '../../../Images/payment1.png';
import signature from '../../../Images/signature.png';
import CloseIcon from '@mui/icons-material/Close';
import { useModal } from '../../../Common/Modal/modal-provider';

const ProfileInfo = () => {

    const { closeModal } = useModal();

    const handleClose = () => {
        closeModal();
    };

    const styles = {
        container: {
            width: '100%',
            boxSizing: 'border-box',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
        },
        imgBox: {
            display: 'flex',
            gap: 0,
        },
        logo: {
            width: '215px',
            height: '371px',
        },
        infoImgBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
        },
        img: {
            width: '215px',
            height: '215px',
        },
        infoBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '12px 32px',
        },
        title: {
            fontSize: '24px',
            fontWeight: 700,
        },
        text: {
            fontSize: '20px',
            fontWeight: 400,
        },
        lightText: {
            fontSize: '20px',
            fontWeight: 400,
            color: '#989898',
        },
        btnBox: {
            background:'#FFFFFF',
            display: 'flex',
            gap: '10px',
            padding: '28px 32px',
            position:"sticky",
            bottom:0,
        },
        acceptBtn: {
            background: '#1BB55C',
            padding: '14px',
            width: '100%',
            color: '#fff',
            fontSize: '20px',
            fontWeight: 400,
            borderRadius: '8px',
            ':hover': {
                background: '#16914a',
            },
        },
        closeBtn: {
            background: '#E74C3C',
            padding: '14px',
            width: 'fit-content',
            color: '#fff',
            fontSize: '20px',
            borderRadius: '8px',
            ':hover': {
                background: '#b33127',
            },
        },
        boxGridList:{
            padding:"0 30px",
        },
        gridContList:{
            borderBottom:"1px solid #5F5E5E",
            padding:"5px 0",
        },
        gridListt:{

        },
    };

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={styles.content}>
                    <Box sx={styles.imgBox}>
                        <img style={styles.logo} src={yourLogo} alt='' />
                        <Box sx={styles.infoImgBox}>
                            <img style={styles.img} src={payment1} alt='' />
                            <img style={styles.img} src={signature} alt='' />
                        </Box>
                    </Box>
                    <Box sx={styles.infoBox}>
                        <Box>
                            <Typography sx={styles.title}>Ali Akbar Farhad Al Dooghi</Typography>
                            <Typography sx={styles.title}>P123012312</Typography>
                            <Typography sx={styles.title}>+971 543 888 7777</Typography>
                            <Typography sx={styles.text}>+971 543 888 7777</Typography>
                            <Typography sx={styles.text}>+971 543 888 7777</Typography>
                        </Box>
                        <Box>
                            <Typography sx={styles.lightText}>Next Payment 21</Typography>
                        </Box>
                    </Box>

                    <Box sx={styles.boxGridList}>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Contract
                        </Grid>
                        <Grid item>
                            P1-1-346654
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Contract Exp.
                        </Grid>
                        <Grid item>
                            2015/03/21
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Contract Amount
                        </Grid>
                        <Grid item>
                            600 AED
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Amount
                        </Grid>
                        <Grid item>
                           600 AED
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Flat
                        </Grid>
                        <Grid item>
                           702 Unit
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                           Type
                        </Grid>
                        <Grid item>
                            Partition
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Room
                        </Grid>
                        <Grid item>
                            3
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContList}>
                        <Grid item xs={8} sx={styles.gridListt}>
                            Unit
                        </Grid>
                        <Grid item>
                            6
                        </Grid>
                    </Grid>
                    </Box>

                    <Box sx={styles.btnBox}>
                        <Button sx={styles.acceptBtn}>Accept</Button>
                        <Button sx={styles.closeBtn} onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default ProfileInfo;