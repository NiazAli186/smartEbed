import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import property1 from '../../../Images/property1.png';
import { useModal } from '../../../Common/Modal/modal-provider';
import PriceModal from './flat-modals/price-modal';

const Expect = () => {

    const { openModal } = useModal();

    const handlePrice = () => {
        openModal({
            content:<PriceModal/>,
            style: {
                height: 'auto',
            },
        })
    };

    const styles = {
        container: {
            width: '100%',
            height:"100vh",
            paddingX: '32px',
            paddingTop: '24px',

        },
        mainBox: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
        },
        orderBox: {
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            width: '200px',
            height: '200px',
            maxWidth: '100%',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            boxSizing: 'border-box',
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
            fontSize: '13px',
        },
        contentBtn: {
            background: '#D2A400',
            width: '100%',
            borderRadius: '8px',
            paddingY: '5.5px',
            color: '#fff',
            fontSize: '14px',
            lineHeight: '14.06px',
            fontWeight: 400,
            minWidth: 'fit-content',
            ':hover': {
                background: '#917203',
            },
        },
    };

    return (
        <>
            <Grid container sx={styles.container}>
                <Box sx={styles.mainBox}>
                    <Typography sx={styles.title}>Flat 1: 703 Unit</Typography>
                    <Box sx={styles.boxList}>
                        <img style={styles.img} src={property1} alt='' />
                        <Box sx={styles.orderBox}>
                            <Box sx={styles.content}>
                                <Typography sx={styles.contentTitle}>Partition</Typography>
                                <Box sx={styles.contentBox}>
                                    <Box sx={styles.contentText} component='span'>Rooms</Box>
                                    <Box sx={styles.contentText} component='span'>1</Box>
                                </Box>
                                <Box sx={styles.contentBox}>
                                    <Box sx={styles.contentText} component='span'>Units</Box>
                                    <Box sx={styles.contentText} component='span'>7</Box>
                                </Box>
                                <Box sx={styles.contentBox}>
                                    <Box sx={styles.contentCost} component='span'>103800 / 108100 AED</Box>
                                </Box>
                            </Box>
                            <Button sx={styles.contentBtn} onClick={handlePrice}>
                                Expect $
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default Expect;