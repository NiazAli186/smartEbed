import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import property1 from '../../../Images/property1.png';
import plus from '../../../Images/plus.png';
import payment1 from '../../../Images/payment1.png';
import {useModal} from '../../../Common/Modal/modal-provider';
import {useNavigate} from 'react-router-dom';
import PriceModal from '../Flat/flat-modals/price-modal';


const Type = () => {

    const navigate = useNavigate();
    const {closeModal, openModal} = useModal();

    const hnadleOpenSaveInformation = () => {
        closeModal();
        navigate('/property/flat/registerInformation');
    };
    const handleOpenPriceModal = () => {
        openModal({
            content: <PriceModal/>,
            style: {
                height: 'auto',
                border:'none'
            },
        });

    };

    const styles = {
        boxContainer: {
            padding: '10px 18px',
        },
        content: {
            display: 'flex',
            gap: '12px',
            width: '100%',
            background: '#EFF7F8',
            marginBottom: '10px',
        },
        img: {
            width: '85px',
            height: '85px',
        },
        contentMain: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '8px 8px 0',
        },
        contentSummery: {
            padding: '8px 8px 0',
            gap: 0,
        },
        unitPartition: {
            paddingBottom: '10px',
        },
        contentTitle: {
            fontSize: '15px',
            fontWeight: 700,
        },
        contentText: {
            fontSize: '12px',
        },
        contentTextSub: {
            fontSize: '12px',
            color: '#989898',
        },
        contentSummeryText: {
            fontSize: '10px',
            fontWeight: 500,
            color: '#989898',
        },
        contentNew: {
            display: 'flex',
            gap: '12px',
            width: '100%',
            background: '#EFF7F8',
            marginBottom: '10px',
        },
        contentMainNew: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '8px 8px 0',
        },
        contentSummeryNew: {
            padding: '8px 8px 0',
            gap: 0,
        },
        contentTitleNew: {
            fontSize: '15px',
            fontWeight: 700,
        },
        gridContainer: {
            height: '5.4rem',
            border: '2px dotted #8F8F91',
        },
        gridItemNew: {
            padding: '10px 5px',

        },
        boxNewContract: {
            width: '65%',
            height: '100%',
            background: '#4B78F9',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        gridExpect: {
            padding: '10px 5px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
        },
        boxNewExpect: {
            width: '65%',
            height: '100%',
            background: '#D7CB68',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        new: {},
    };

    return (
        <>
            <Box sx={styles.boxContainer}>
                <Typography variant={'h6'} sx={styles.unitPartition}>Flat 1:704 Unit-Partition</Typography>
                <Box sx={styles.content}>
                    <img style={styles.img} src={payment1} alt=""/>
                    <Box sx={styles.contentMain}>
                        <Typography sx={styles.contentTitle}>#Partition 1-1</Typography>
                        <Typography sx={styles.contentText}>Ali Akbar Farhad Al Dooghi</Typography>
                        <Typography sx={styles.contentTextSub}>P1287131231</Typography>
                    </Box>
                    <Box sx={styles.contentSummery}>
                        <Typography sx={styles.contentSummeryText}>Contract:</Typography>
                        <Typography sx={styles.contentSummeryText}>2022/12/12</Typography>
                        <Typography sx={styles.contentSummeryText}>Pay:</Typography>
                        <Typography sx={styles.contentSummeryText}>2024/12/12</Typography>
                    </Box>
                </Box>

                <Box sx={styles.content}>
                    <img style={styles.img} src={payment1} alt=""/>
                    <Box sx={styles.contentMain}>
                        <Typography sx={styles.contentTitle}>#Partition 1-1</Typography>
                        <Typography sx={styles.contentText}>Ali Akbar Farhad Al Dooghi</Typography>
                        <Typography sx={styles.contentTextSub}>P1287131231</Typography>
                    </Box>
                    <Box sx={styles.contentSummery}>
                        <Typography sx={styles.contentSummeryText}>Contract:</Typography>
                        <Typography sx={styles.contentSummeryText}>2022/12/12</Typography>
                        <Typography sx={styles.contentSummeryText}>Pay:</Typography>
                        <Typography sx={styles.contentSummeryText}>2024/12/12</Typography>
                    </Box>
                </Box>

                <Box sx={styles.contentNew}>

                    <Grid container sx={styles.gridContainer}>
                        <Grid item xs={4} sx={styles.gridItemNew}>
                            <Box sx={styles.boxNewContract} onClick={hnadleOpenSaveInformation}>
                                <Typography>New</Typography>
                                <Typography>Contract</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant={'h6'}>Partition 1-1</Typography>
                        </Grid>
                        <Grid item xs={4} sx={styles.gridExpect}>
                            <Box sx={styles.boxNewExpect} onClick={handleOpenPriceModal}>
                                <Typography sx={styles.new}>Expect</Typography>
                                <Typography>$</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </>
    );
};

export default Type;