import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import property1 from '../../Images/property1.png';
import plus from '../../Images/plus.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useModal} from '../../Common/Modal/modal-provider';
import NewContract from './Flat/flat-modals/new-contract';
import Expect from './Flat/Expect';

const Property = () => {

    const {openModal} = useModal();

    const handleExpect = () => {
        openModal({
            content: <Expect/>,
            styles:{
                height: 'none',
            },
        });
    };

    const modalHandler = () => {
        openModal({
            content: <NewContract/>,
        });
    };
    const styles = {
        container: {
            width: '100%',
            paddingX: '32px',
            paddingTop: '24px',
            // position: 'relative',
        },
        mainBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
        },
        title: {
            fontSize: '24px',
        },
        boxList: {
            display: 'flex',
            gap: 0,
            border: '1px solid #B3B3B3',
        },
        img: {
            width: '150px',
            height: '150px',
            maxWidth: '100%',
        },
        content: {
            padding: '8px 8px 10px 8px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 1,
        },
        contentBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        contentTitle: {
            fontSize: '16px',
            fontWeight: 700,
        },
        contentText: {
            fontSize: '14px',
            lineHeight: '18.75px',
            color: '#989898',
        },
        contentLocation: {
            fontSize: '12px',
            lineHeight: '14.06px',
            color: '#989898',
            display: 'flex',
            alignItems: 'center',
        },
        contentCost: {
            color: '#007BFF',
            fontSize: '14px',
            fontWeight: 700,
        },
        contentBtn: {
            color: '#007BFF',
            fontSize: '12px',
            lineHeight: '14.06px',
            padding: 0,
            fontWeight: 400,
            minWidth: 'fit-content',
        },
        icon: {
            color: '#000',
            width: '14px',
        },
        addBtn: {
            background: '#1BB55C',
            fontSize: '32px',
            fontWeight: 700,
            borderRadius: '50%',
            position: 'absolute',
            cursor: 'pointer',
            right: '32px',
            bottom: '80px',
            width: '56px',
            height: '55px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        plusIcon: {
            width: '18px',
        },
    };

    return (
        <>
            <Grid container sx={styles.container}>
                <Box sx={styles.mainBox} onClick={handleExpect}>
                    <Typography sx={styles.title}>Flats</Typography>
                    <Box sx={styles.boxList}>
                        <img style={styles.img} src={property1} alt=""/>
                        <Box sx={styles.content}>
                            <Typography sx={styles.contentTitle}>#Flat 1: 703 Unit</Typography>
                            <Box sx={styles.contentBox}>
                                <Box sx={styles.contentText} component="span">Floor: 7</Box>
                                <Box sx={styles.contentText} component="span">Unit: 703</Box>
                            </Box>
                            <Box sx={styles.contentBox}>
                                <Box sx={styles.contentText} component="span">Partitions: 5/7</Box>
                                <Box sx={styles.contentText} component="span">Beds: 40/43</Box>
                            </Box>
                            <Box sx={styles.contentBox}>
                                <Box sx={styles.contentText} component="span">Income:</Box>
                                <Box sx={styles.contentCost} component="span">108800 AED</Box>
                            </Box>
                            <Box sx={styles.contentBox}>
                                <Box sx={styles.contentLocation} component="span">
                                    <LocationOnIcon sx={styles.icon} fontSize="small"/>
                                    No23-Rigga-Dira-Duai
                                </Box>
                                <Button sx={styles.contentBtn}>show</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.addBtn} onClick={modalHandler}>
                    <img style={styles.plusIcon} src={plus} alt=""/>
                </Box>
            </Grid>
        </>
    );
};

export default Property;