import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import aboutUs from '../../Components/Profile/about Us/aboutUs';

export default function Progress({ progress }) {
    const styles = {
        boxProgress: {
            position: 'absolute',
            background: '#B4B0B0',
            height: '100vh',
            width: '100%',
            opacity: 0.6,
            zIndex: 3,
            display:"flex",
            justifyContent:"center",
            alignItems:'center',

        },
        circularProgress: {
            zIndex: 10,
        },
    };
    return (
        <>
        <Box sx={styles.boxProgress}>
            <Box sx={styles.circularProgress}>
                <CircularProgress />
            </Box>
        </Box>
        </>

    );
}