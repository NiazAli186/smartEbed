import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useModal} from '../../../Common/Modal/modal-provider';

function UserBalance(props) {

    const {closeModal}=useModal()
    const navigate =useNavigate()
    const handleClose =()=>{
        closeModal();
        navigate('/property/flat/partition');
    }
    const styles = {
        boxBalance1: {
            background: '#070707',
            height: '100vh',
            padding: 0,
        },
        boxBalance2: {
            background: '#FFFFFF',
            height: '11rem',
            padding: '18px',
        },
        gridContainer: {
            paddingY:"10px",
        },
        gridItems1: {

        },
        gridItemsUser:{
            color:'#FC6464',
        },
        gridContainerBtn:{
            paddingY:'20px',
        },
        gridItemsBtn:{
          justifyContent:"center",
        },
        btnBalance:{
            background:'#E7E3E3',
            width:"100%",
        }
    };
    return (
        <>
            <Box sx={styles.boxBalance1}>
                <Box sx={styles.boxBalance2}>
                    {/*<Grid container>*/}
                    {/*    <Grid item onClick={handleClose}>*/}
                    {/*        back*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <Typography variant={'h6'}>
                        Are You Sure Pay Next Month
                    </Typography>
                    <Grid container sx={styles.gridContainer}>
                        <Grid item sx={styles.gridItems1} xs={8}>
                            Next Month Cost:
                        </Grid>
                        <Grid item sx={styles.gridItems1}>
                            6000 AED
                        </Grid>
                    </Grid>

                    <Grid container sx={styles.gridContainer}>
                        <Grid item sx={styles.gridItems1} xs={8}>
                            User Balance:
                        </Grid>
                        <Grid item sx={styles.gridItemsUser}>
                           400 AED
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.gridContainerBtn}>
                        <Grid item sx={styles.gridItemsBtn} xs={12}>
                            <Button sx={styles.btnBalance}>Sure</Button>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default UserBalance;