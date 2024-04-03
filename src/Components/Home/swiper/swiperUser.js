import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box, Grid, Typography} from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import payment1 from '../../../Images/payment1.png';
import costomer22 from '../../../Images/costomer22.png'

// import required modules
import {Pagination} from 'swiper/modules';
import {useModal} from '../../../Common/Modal/modal-provider';
import ProfileInfo from '../../Payment/payment-modals/profile-info';

export default function SwiperUser() {

    const {openModal} = useModal();
    const handleOpenProfile = () => {
        openModal({
            content: <ProfileInfo/>,
        });
    };

    const styles = {
        boxSwiper:{
          padding:'4px 0 4px 7px',
            backgroundColor: '#E5E5E5',
        },
        swiperss: {
            width: '100%',
        },
        swiperSlider: {
            width: '120px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            background: '#FCFCFC',
        },
        gridOpenBtn: {
            paddingTop: '3px',
            paddingLeft: '3px',
        },
        openIcon: {
            background: '#3FE306',
            borderRadius: '5px',
        },
        gridCloseBtn: {
            paddingTop: '3px',
        },
        closeIcon: {
            background: '#F4251E',
            borderRadius: '5px',

        },
        payment1: {},
        typographySpan1: {
            color: '#06A3E3',
            fontSize: '12px',
            paddingLeft: '2px',
        },
        typographySpan2: {
            fontSize: '12px',
            paddingLeft: '2px',
        },
        typographySpan3: {
            color: '#F02B0B',
            fontSize: '12px',
            paddingLeft: '2px',
        },
    };
    return (
        <>
            <Box sx={styles.boxSwiper}>

            <Swiper style={styles.swiperss}
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
            >
                <SwiperSlide style={styles.swiperSlider} onClick={handleOpenProfile}>
                    <Grid container>
                        <Grid item xs={9} sx={styles.gridOpenBtn}>
                            <DoneIcon style={styles.openIcon}/>
                        </Grid>
                        <Grid item sx={styles.gridCloseBtn}>
                            <CloseIcon style={styles.closeIcon}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <img src={payment1} alt="" style={styles.payment1}/>
                        </Grid>
                    </Grid>
                    <Typography style={styles.typographySpan1}>UP-100063</Typography>
                    <Typography style={styles.typographySpan2}>Hashem Abass</Typography>
                    <Typography style={styles.typographySpan3}>1,000AED</Typography>
                </SwiperSlide>

                <SwiperSlide style={styles.swiperSlider} onClick={handleOpenProfile}>
                    <Grid container>
                        <Grid item xs={9} sx={styles.gridOpenBtn}>
                            <DoneIcon style={styles.openIcon}/>
                        </Grid>
                        <Grid item sx={styles.gridCloseBtn}>
                            <CloseIcon style={styles.closeIcon}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <img src={costomer22} alt="" style={styles.payment1}/>
                        </Grid>
                    </Grid>
                    <Typography style={styles.typographySpan1}>UP-100063</Typography>
                    <Typography style={styles.typographySpan2}>Hashem Abass</Typography>
                    <Typography style={styles.typographySpan3}>1,000AED</Typography>
                </SwiperSlide>

                <SwiperSlide style={styles.swiperSlider} onClick={handleOpenProfile}>
                    <Grid container>
                        <Grid item xs={9} sx={styles.gridOpenBtn}>
                            <DoneIcon style={styles.openIcon}/>
                        </Grid>
                        <Grid item sx={styles.gridCloseBtn}>
                            <CloseIcon style={styles.closeIcon}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <img src={payment1} alt="" style={styles.payment1}/>
                        </Grid>
                    </Grid>
                    <Typography style={styles.typographySpan1}>UP-100063</Typography>
                    <Typography style={styles.typographySpan2}>Hashem Abass</Typography>
                    <Typography style={styles.typographySpan3}>1,000AED</Typography>
                </SwiperSlide>

                <SwiperSlide style={styles.swiperSlider} onClick={handleOpenProfile}>
                    <Grid container>
                        <Grid item xs={9} sx={styles.gridOpenBtn}>
                            <DoneIcon style={styles.openIcon}/>
                        </Grid>
                        <Grid item sx={styles.gridCloseBtn}>
                            <CloseIcon style={styles.closeIcon}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <img src={costomer22} alt="" style={styles.payment1}/>
                        </Grid>
                    </Grid>
                    <Typography style={styles.typographySpan1}>UP-100063</Typography>
                    <Typography style={styles.typographySpan2}>Hashem Abass</Typography>
                    <Typography style={styles.typographySpan3}>1,000AED</Typography>
                </SwiperSlide>
            </Swiper>
            </Box>
        </>
    )
        ;
}
