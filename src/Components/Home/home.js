import React, {useContext, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Card, Grid} from '@mui/material';
import MediaControlCard from './lastUser';
import {ButtonBase} from '@mui/material';
import SwiperUser from './swiper/swiperUser';


const Home = () => {

    const styles = {
        divHome: {
            margin: 'auto', padding: '0 0 3.5rem 0',

        }, gridContainer: {
            paddingY: 2, paddingX: 1, zIndex: -4, backgroundColor: '#FFFFFF',
        }, btnSeeMore: {
            backgroundColor: '#0000FF', padding: 1, color: '#FFFFFF', borderRadius: 3,
        }, gridBtn: {
            textAlign: 'center',
        },
    };

    return (<>
        <div style={styles.divHome}>
            <Grid container sx={styles.gridContainer}>
                <Grid item xs={9}>
                    <Typography variant="h6">
                        Last Payment Pending
                    </Typography>
                </Grid>
                <Grid item sx={styles.gridBtn}>

                    <ButtonBase variant="text" sx={styles.btnSeeMore}>See More</ButtonBase>

                </Grid>

            </Grid>
            <SwiperUser/>

            <Grid container sx={styles.gridContainer}>
                <Grid item xs={9}>
                    <Typography variant="h6">
                        Close charges
                    </Typography>
                </Grid>
                <Grid item sx={styles.gridBtn}>

                    <ButtonBase variant="text" sx={styles.btnSeeMore}>See More</ButtonBase>

                </Grid>

            </Grid>
            <SwiperUser/>

            {/* Last User*/}
            <Box>
                <MediaControlCard/>
            </Box>
        </div>
    </>);
};

export default Home;