import React, {useContext, useEffect, useState} from 'react';
import {Grid, Box, Typography} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import {LoadingContext} from '../../../App';


function Wallet() {
    const {walletCredite} = useContext(LoadingContext);

    const styles = {
        gridContainer: {
            padding: 0,
        }, accountBalanceWalletIcon: {
            color: '#0E6DF5', width: '20px', height: '20px',

        },
        gridItemsBell:{
            position:"relative",
        },
        walletGrid: {
            fontSize: '15px',
        }, BoxBell: {
            color: '#0C0A0A',
            width: '10px',
            height: '10px',
            borderRadius: '50px',
            background: '#F42551',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top:"0",
            right:"0",
        },
        typographyBell:{
            background: 'none',
            fontSize: '9px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };
    const handleClick = () => {
        // Assuming `init` is a predefined object
    };

    return (<>
            <Grid container sx={styles.gridContainer} onClick={handleClick}>
                <Grid item xs={1}>
                    <Box>
                        <AccountBalanceWalletIcon sx={styles.accountBalanceWalletIcon}/>
                    </Box>
                </Grid>
                <Grid item xs={9} sx={styles.walletGrid}>

                    <Typography variant={'h7'}>{walletCredite} <span>$</span></Typography>
                </Grid>
                <Grid item sx={styles.gridItemsBell}>
                    <Box sx={styles.BoxBell}>
                        <Typography sx={styles.typographyBell}>{walletCredite}</Typography>
                    </Box>
                    <NotificationsIcon color="black" sx={styles.notificationsIcon}/>
                    {/*<Badge badgeContent={walletCredite} color="info">*/}
                    {/*   */}
                    {/*</Badge>*/}
                </Grid>

            </Grid>

        </>

    );
}

export default Wallet;